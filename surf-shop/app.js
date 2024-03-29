const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

/***Imports for authentication */
const session = require('express-session');
const passport = require('passport');

const User = require('./models/User');

/*******Routers ***********/
const indexRouter = require('./routes/index');

const postsRouter = require('./routes/posts');
const reviewsRouter = require('./routes/reviews');

app = express();

//Connect to the database

mongoose.connect(
	'mongodb+srv://<username>:<password>@cluster0-hwowi.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Database connected');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

/******* Configure Passport and Sessions ********/

app.use(
	session({
		secret: 'SECRET',
		resave: false,
		saveUninitialized: true
	})
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/**************** Routes *************/
const index = app.use('/', indexRouter);
const posts = app.use('/posts', postsRouter);
const reviews = app.use('/posts/:id/reviews', reviewsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
