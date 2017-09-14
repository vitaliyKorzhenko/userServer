var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var users = require('./routes/users');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', users);

app.use(function (req, res) {
    res.locals.message = "Page Not Found. Correct URL users/registration";
    res.locals.error = {status: 404};
    res.status(404);
    res.render('error');
});





module.exports = app;
