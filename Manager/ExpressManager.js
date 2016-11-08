/**
 * Created by jabue on 16-08-17.
 */
var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');

// path router
var indexController = require(process.cwd() + '/Controller/IndexController');
var userController = require(process.cwd() + '/Controller/UserController');
var authController = require(process.cwd() + '/Controller/AuthController');
var mapController = require(process.cwd() + '/Controller/MapController');
var testController = require(process.cwd() + '/Controller/TestController');
var errorController = require(process.cwd() + '/Controller/ErrorController');

var exports = module.exports = {};

exports.setBodyParser = function (app) {
    console.log('Setting express body parser...');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}

exports.setViewEngine = function (app) {
    console.log('Setting express view engine...');
    app.set('views', process.cwd() + '/View');
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        extname: '.hbs',
        layoutsDir: process.cwd() + '/View/layouts',
        partialsDir: process.cwd() + '/View/partials'
    }));
    app.set('view engine', '.hbs');
}

exports.setPathRouter = function (app) {
    console.log('Setting express path router...');
    app.use('/', indexController);
    app.use('/user', userController);
    app.use('/auth', authController);
    app.use('/map', mapController);
    app.use('/test', testController);
    app.all('*', errorController);
}

exports.setStaticDir = function (app) {
    console.log('Setting express static directory...');
    app.use(express.static(process.cwd() + '/Component'));
    app.use(express.static(process.cwd() + '/Resource'));
}
