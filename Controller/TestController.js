/**
 * Created by jabue on 16-06-15.
 */
require("babel-register");
var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var test = require('../Component/testcp');
var router = express.Router();

router.get('/test', function (req, res, next) {
    var element = React.createElement(test, null, null);
    res.render('index', {
        layout: 'main',
        test: ReactDOMServer.renderToString(element),
        people: ['chris', 'lucia'],
        parttest: 'houhou',
        title: 'titletest'
    });
});

router.get('/addRoute', function (req, res, next) {
    res.render('addRoute', {
        layout: 'main',
        title: 'Map Add Route'
    });
});

router.get('/routes', function (req, res, next) {
    res.render('routes', {
        layout: 'main',
        title: 'Map Routes'
    });
});

router.get('/mapTest', function (req, res, next) {
    res.render('mapTest', {
        layout: 'main',
        title: 'Map Test'
    });
});

// send static files, for testing
router.get('/test1', function (req, res, next) {
    res.sendFile(process.cwd() + '/View/separate.html');
});

module.exports = router;