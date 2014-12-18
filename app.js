
// Google server API key for IP localhost = 127.0.0.1  API key = AIzaSyASHiwuhRi_LlHm4Bjmi_05yh72uN91HyM
var express = require('express'),
		ejs 		= require('ejs'),
		app			= express(),
		path		= require('path'),
		bodyParser 	  = require('body-parser'),
		cookieParser  = require('cookie-parser'),
		session       = require('express-session'),
		LocalStrategy = require('passport-local').Strategy,
		passport      = require('passport'),
		db						= require('./db.js'),
		methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/games'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	db.query('SELECT * FROM users WHERE id = $1', [id], function(err, dbRes) {
		if (!err) {
			done(err, dbRes.rows[0]);
		}
	});
});

app.listen(7000, function() {
	console.log('Server LH7K is up!');
});

var localStrategy = new LocalStrategy(
  function(username, password, done) {
    db.query('SELECT * FROM users WHERE username = $1', [username], function(err, dbRes) {
    	var user = dbRes.rows[0];
    	console.log(username)

    	console.log(user);


      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
      if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
      return done(null, user);
    })
  }
);

passport.use(localStrategy);

app.get('/', function(req, res) {
	res.render('index', { user: req.user });
});

// User routes
app.get('/users/new', function(req, res) {
	res.render('users/new');
});

app.post('/users', function(req, res) {
	db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [req.body.username, req.body.email, req.body.password], function(err, dbRes) {
			if (!err) {
				res.redirect('/sessions/new');
			}
	});
});

// Session routes
app.get('/sessions/new', function(req, res) {
	res.render('sessions/new');
});

app.post('/sessions', passport.authenticate('local', 
  {failureRedirect: '/sessions/new'}), function(req, res) {
    res.redirect('/play');
});

app.delete('/sessions', function(req, res) {
	req.logout();
	res.redirect('/');
});

app.get('/play', function(req, res) {
	res.render('games/game');
});

// app.post('/play', function(req, res) {
// 	db.query(Google Images API, function(err, dbRes) {
// 			if (!err) {
// 				res.redirect('/play');
// 			}
// 	});
// });






















