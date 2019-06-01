const User = require('../models/User');
const passport = require('passport');

module.exports = {
	async postRegister(req, res, next) {
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			image: req.body.image
		});

		await User.register(newUser, req.body.password);
		res.redirect('/');
	},

	/*  Login */

	postLogin(req, res, next) {
		passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/login'
		})(req, res, next);
	},

	/*  Logout */

	getLogout(req, res, next) {
		req.logout();
		res.redirect('/');
	},

	




};
