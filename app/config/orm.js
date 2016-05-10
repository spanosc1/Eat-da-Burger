var connection = require('./connect.js');

var tableName = 'burgers';

var orm = {

	addBurger: function(burger, callback) {
		//var routeName = character.name.replace(/\s+/g, '').toLowerCase();
		var s = "INSERT INTO " + tableName + " (burger_name, devoured, date) VALUES (?,?,?)";
		connection.query(s,[burger.name, character.name, character.role], function(err, result) {
			callback(result);
		});
	}
};

module.exports = orm;