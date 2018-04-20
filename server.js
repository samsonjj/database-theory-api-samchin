var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

//var models = require('./api/models/brotherListModel');
var routes = require('./api/routes/healthInsuranceRoutes'); //importing route
routes(app);

app.listen(port);

console.log('kgotweb server started on: ' + port);