/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

module.exports = function(app) {

	//cavecanem config
	app.use(function (req, res, next) {
		var username = process.env.USER_ID;
		var password = process.env.USER_PWD;

		req.cc = {
			checkCredentials: function(credentials){
				return (credentials.username === username && credentials.password === password);
			}
		};
		next();
	});


	// Insert routes below
	app.use('/api/posts', require('./api/post'));
	// All undefined asset or api routes should return a 404
	app.route('/:url(api|auth|components|app|bower_components|assets)/*')
		.get(errors[404]);

	// All other routes should redirect to the index.html
	app.route('/*')
		.get(function(req, res) {
			res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
		});
};
