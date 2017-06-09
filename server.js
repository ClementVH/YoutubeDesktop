// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var path = require('path');
// var cookieParser = require('cookie-parser')
// var bodyParser = require('body-parser');
// var conf = require('./config/config.json');
// var port = process.env.PORT || 3000;
// var atob = require('atob');

// var simpleOauth2 = require('simple-oauth2').create(conf.oauth);

// var routes = require('./routes.js');

// var sockets = require('./sockets.js');

// app.use(cookieParser())

// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('dist'));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// app.use(function(req, res, next){
// 	if (conf.local)
// 		res.cookie('access_token', 'fake_access_token');

// 	next();
// });

// app.use(routes.localapi)

// app.get('/', function (req, res) {
// 	res.render('index');
// });

// app.get('/authCallback', function(req, res) {
// 	res.send('HELLO');
// })

// app.get('/token', function (req, res) {

// 	if(req.query.code) {

// 		var code = req.query.code;

// 		var redirect_uri = conf.path + '/token';

// 		oauth2.authCode.getToken({
// 			code: code,
// 			redirect_uri: redirect_uri
// 		}, saveToken);

// 		function saveToken(error, result) {
// 			if (error)
// 				console.log('Access Token Error', error);

// 			res.cookie('access_token', result.access_token);

// 			if(req.query.state == undefined)
// 				res.redirect('/');
// 			else
// 				res.redirect('/' + atob(req.query.state));
// 		}
// 	}
// 	else
// 		res.render('index');

// });

// app.get('/api', routes.api);

// app.get('/sendVideoId', function (req, res) {
// 	io.emit('videoId', req.query.videoId);
// 	res.send({ status: 'ok' });
// });

// io.on('connection', function (socket) {

// 	sockets['clement'] = socket;

// 	console.log('a user connected');

// 	socket.on('disconnect', function () {
// 		delete(sockets['clement']);
// 		console.log('user disconnected');
// 	});
// });

// http.listen(port, function () {
// 	console.log('listening on *:' + port);
// });

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const atob = require('atob');
const conf = require('./config/config.json');

const oauth2 = require('simple-oauth2')(conf.oauth);

const server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(__dirname, 'dist')
			}
		}
	}
});

server.connection({ port: process.env.PORT || 3000 });

global.io = require('socket.io')(server.listener);
global.sockets = {};

const api = require('./api.js');

server.route(api);

server.state('access_token', {
    ttl: 1000*60*60*24*365,
    isSecure: false,
    isHttpOnly: false,
    clearInvalid: false,
    strictHeader: false,
});

server.route({
	method: 'GET',
	path: '/token',
	handler: (req, res) => {

		if(req.query.code) {

			var code = req.query.code;

			var redirect_uri = conf.path + '/token';

			oauth2.authCode.getToken({
				code: code,
				redirect_uri: redirect_uri
			}, saveToken);

			function saveToken(error, result) {
				if (error)
					console.log('Access Token Error', error);

				if(req.query.state == undefined)
					res.redirect('/').state("access_token", result.access_token);
				else
					res.redirect('/' + atob(req.query.state)).state("access_token", result.access_token, {ttl : 1000*60*60*24*365});
			}
		}
		else
			res.redirect('/');
	}
});

server.register(Inert, () => {});

server.route({
	method: 'GET',
	path: '/{param*}',
	handler: {
		directory: {
			path: '.',
			redirectToSlash: true,
			index: true
		}
	}
});

io.on('connection', function (socket) {

	sockets['clement'] = socket;

	console.log('a user connected');

	socket.on('disconnect', function () {
		delete(sockets['clement']);
		console.log('user disconnected');
	});
});

server.start((err) => {

	if (err) {
		throw err;
	}

	console.log('Server running at:', server.info.uri);
});