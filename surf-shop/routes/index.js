var express = require('express');
var router = express.Router();

const { asyncErrorHandler } = require('../middleware');
const { postRegister, postLogin, getLogout } = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Surf Shop -Home' });
});

/* GET /register */

router.get('/register', function(req, res, next) {
	res.send('GET /register');
});

/* POST /register */
router.post('/register', asyncErrorHandler(postRegister));

/*Get /login */

router.get('/login', function(req, res, next) {
	res.send('GET /login');
});

/*POST /login */
router.post('/login', postLogin);

/*GET/logout*/

router.get('/logout', getLogout);

/* GET /profile */

router.get('/profile', function(req, res, next) {
	res.send('GET /profile');
});

/* PUT /profile/:user_id */

router.put('/profile/:user_id', function(req, res, next) {
	res.send('PUT /profile/:user_id');
});

/* GET /forgot_password */

router.get('/forgot', function(req, res, next) {
	res.send('GET /forgot');
});

/* PUT /forgot-password */

router.put('/forgot', function(req, res, next) {
	res.send('PUT /forgot');
});

/* GET /reset-password */
router.get('/reset/:token', function(req, res, next) {
	res.send('GET /reset/:token');
});

/* PUT /reset-password/token*/

router.put('/reset/:token', function(req, res, next) {
	res.send('PUT /reset/:token');
});

module.exports = router;
