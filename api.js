// var request = require('request');
// var queryString = require('query-string');

// var api = module.exports = {};

// api.getVideosFromQuery = function(req, res) {

// 	var raw_params = req.query;

// 	if(!(raw_params.access_token && raw_params.q)) {
// 		res.status(403).send('Invalid Arguments');
// 		return;
// 	}

// 	var params = {
// 		access_token: raw_params.access_token,
// 		q: raw_params.q,
// 		part: "snippet",
// 		maxResults: 20
// 	}

// 	youtubeRequest('search', params, res);

// 	return;

// }

// api.getMySubscriptions = function(req, res) {

// 	var raw_params = req.query;

// 	if(!(raw_params.access_token)) {
// 		res.status(403).send('Invalid Arguments');
// 		return;
// 	}

// 	var params = {
// 		access_token: raw_params.access_token,
// 		mine: true,
// 		part: "snippet",
// 		maxResults: 20
// 	}

// 	youtubeRequest('subscriptions', params, res);

// 	return;

// }

// api.getVideosOfChannel = function(req, res) {

// 	var raw_params = req.query;

// 	if(!(raw_params.access_token && raw_params.channelId)) {
// 		res.status(403).send('Invalid Arguments');
// 		return;
// 	}

// 	var params = {
// 		access_token: raw_params.access_token,
// 		channelId: raw_params.channelId,
// 		order: 'date',
// 		part: "snippet",
// 		maxResults: 20
// 	}

// 	youtubeRequest('search', params, res);

// 	return;

// }

// var youtubeRequest = function(method, params, res) {

// 	var url = 'https://www.googleapis.com/youtube/v3/' + method;

// 	var access_token = params.access_token;

// 	delete(params.access_token);

// 	params.key = "AIzaSyDPJtc7fBuIn0TKIj6zndnp_F4K7ccBY0M";

// 	var stringified = queryString.stringify(params);

// 	url+= '?' + stringified;

// 	var options = {
// 		url: url,
// 		headers : {
// 			'Authorization' : 'Bearer ' + access_token,
// 		}
// 	}

// 	request(options, function (error, response, body) {

// 		if (!error && response.statusCode == 200) {
// 			res.send(body);
// 		}

// 		else
// 			res.status(403).send();

// 	});

// }

// var sockets = require('./sockets.js')

// api.getSuggestQuery = function(req, res) {

// 	var params = req.query;

// 	var q = params.q;

// 	if (q) {

// 		if (sockets['clement'])
// 			sockets['clement'].emit('suggestQuery', q, function(suggest) {

// 				res.send(suggest);

// 			});

// 		else res.send([]);

// 	}

// 	else
// 		res.send('Missing params "q"');

// }

// api.getVideoInfos = function(req, res) {
// 	if(sockets['clement'])
// 		sockets['clement'].emit('getVideoInfos', '', function(infos) {
// 			res.send(infos);
// 		});
// 	else
// 		res.send({});
// }

// api.toggleVideoState = function(req, res) {
// 	if(sockets['clement'])
// 		sockets['clement'].emit('toggleVideoState');
// 	res.send({});
// }

// api.pauseVideo = function(req, res) {
// 	if(sockets['clement'])
// 		sockets['clement'].emit('pauseVideo');
// 	res.send({});
// }

// api.playVideo = function(req, res) {
// 	if(sockets['clement'])
// 		sockets['clement'].emit('playVideo');
// 	res.send({});
// }

// api.incrVolume = function(req, res) {
// 	if(sockets['clement'])
// 		sockets['clement'].emit('incrVolume');
// 	res.send({});
// }

// api.decrVolume = function(req, res) {
// 	if(sockets['clement'])
// 		sockets['clement'].emit('decrVolume');
// 	res.send({});
// }

// api.setCurrentTime = function(req, res) {

// 	var params = req.query;

// 	var percent = params.percent;

// 	console.log(percent);

// 	if(sockets['clement'])
// 		sockets['clement'].emit('setCurrentTime', percent);
// 	res.send({});

// }
const request = require('request');
const queryString = require('query-string');

let youtubeRequest = function(method, params, res) {

	var url = 'https://www.googleapis.com/youtube/v3/' + method;

	var access_token = params.access_token;

	delete(params.access_token);

	params.key = "AIzaSyDPJtc7fBuIn0TKIj6zndnp_F4K7ccBY0M";

	var stringified = queryString.stringify(params);

	url+= '?' + stringified;

	var options = {
		url: url,
		headers : {
			'Authorization' : 'Bearer ' + access_token,
		}
	}

	request(options, function (error, response, body) {

		if (!error && response.statusCode == 200) {
			res(body);
		}

		else
			res().code(403);

	});

}

let api = module.exports = [];

let getVideosFromQuery = {
	method: 'GET',
	path: '/api/getVideosFromQuery',
	handler: (req, res) => {
		var raw_params = req.query;

		if(!(raw_params.access_token)) {
			res('Invalid Arguments').code(403);
			return;
		}

		var params = {
			access_token: raw_params.access_token,
			q: raw_params.q,
			part: "snippet",
			maxResults: 20
		}

		youtubeRequest('search', params, res);

		return;

	}
};

api.push(getVideosFromQuery);

let getVideosOfChannel = {
	method: 'GET',
	path: '/api/getVideosOfChannel',
	handler: (req, res) => {

		var raw_params = req.query;

		if(!(raw_params.access_token && raw_params.channelId)) {
			res('Invalid Arguments').code(403);
			return;
		}

		var params = {
			access_token: raw_params.access_token,
			channelId: raw_params.channelId,
			order: 'date',
			part: "snippet",
			maxResults: 20
		}

		youtubeRequest('search', params, res);

		return;
	}
};

api.push(getVideosOfChannel);

let getMySubscriptions = {
	method: 'GET',
	path: '/api/getMySubscriptions',
	handler: (req, res) => {
		var raw_params = req.query;

		if(!(raw_params.access_token)) {
			res('Invalid Arguments').code(403);
			return;
		}

		var params = {
			access_token: raw_params.access_token,
			mine: true,
			part: "snippet",
			maxResults: 20
		}

		youtubeRequest('subscriptions', params, res);
	}
};

api.push(getMySubscriptions);

////////// SOCKETS

let sendVideoId = {
	method: 'GET',
	path: '/sendVideoId',
	handler: (req, res) => {
		io.emit('videoId', req.query.videoId);
		res({ status: 'ok' });
	}
};

api.push(sendVideoId);

let getSuggestQuery = {
	method: 'GET',
	path: '/api/getSuggestQuery',
	handler: (req, res) => {

		var params = req.query;

		var q = params.q;

		if (q) {

			if (sockets['clement'])
				sockets['clement'].emit('suggestQuery', q, function(suggest) {

					res(suggest);

				});

			else res([]);

		}

		else
			res('Missing params "q"');
	}

}

api.push(getSuggestQuery);

let getVideoInfos = {
	method: 'GET',
	path: '/api/getVideoInfos',
	handler: (req, res) => {
		if(sockets['clement'])
			sockets['clement'].emit('getVideoInfos', '', function(infos) {
				res(infos);
			});
		else
			res({});
	}
}

api.push(getVideoInfos);

let toggleVideoState = {
	method: 'GET',
	path: '/api/toggleVideoState',
	handler: (req, res) => {
		if(sockets['clement'])
			sockets['clement'].emit('toggleVideoState');
		res({});
	}
}

api.push(toggleVideoState);

let pauseVideo = {
	method: 'GET',
	path: '/api/pauseVideo',
	handler: (req, res) => {
		if(sockets['clement'])
			sockets['clement'].emit('pauseVideo');
		res({});
	}
}

api.push(pauseVideo);

let toggleFullscreen = {
	method: 'GET',
	path: '/api/toggleFullscreen',
	handler: (req, res) => {
		if(sockets['clement'])
			sockets['clement'].emit('toggleFullscreen');
		res({});
	}
}

api.push(toggleFullscreen);

let playVideo = {
	method: 'GET',
	path: '/api/playVideo',
	handler: (req, res) => {
		if(sockets['clement'])
			sockets['clement'].emit('playVideo');
		res({});
	}
}

api.push(playVideo);

let incrVolume = {
	method: 'GET',
	path: '/api/incrVolume',
	handler: (req, res) => {
		if(sockets['clement'])
			sockets['clement'].emit('incrVolume');
		res({});
	}
}

api.push(incrVolume);

let decrVolume = {
	method: 'GET',
	path: '/api/decrVolume',
	handler: (req, res) => {
		if(sockets['clement'])
			sockets['clement'].emit('decrVolume');
		res({});
	}
}

api.push(decrVolume);

let setCurrentTime = {
	method: 'GET',
	path: '/api/setCurrentTime',
	handler: (req, res) => {
		var params = req.query;

		var percent = params.percent;

		console.log(percent);

		if(sockets['clement'])
			sockets['clement'].emit('setCurrentTime', percent);
		res({});
	}
}

api.push(setCurrentTime);