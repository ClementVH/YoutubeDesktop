var api = require('./api.js');
var localapi = require('./localapi.js');
var conf = require('./config/config.json');

var exports = module.exports = {};

exports.api = function(req, res) {

	if (conf.local)
		res.redirect('localapi');

	var method = req.query.method;

	try {
		api[method](req, res);
	} catch (e) {
		res.status(404).send('404 Not Found');
	}

}

exports.localapi = function(req, res, next) {

	if (conf.local && req.query.method) {

		var method = req.query.method;

		try {
			localapi[method](req, res);
		}
		catch (e) {
			res.status(404).send('404 Not Found');
		}

	}
	else
		next();

}