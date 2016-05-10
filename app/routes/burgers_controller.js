var path = require('path');
var orm = require("../config/orm.js");

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});
	app.post('/api/new', function(req, res) {
		var burger = req.body;
		orm.addBurger(burger, function(data) {

		});
	})
}