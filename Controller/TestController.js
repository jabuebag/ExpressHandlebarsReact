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
    res.render('index', {layout: 'main', test: ReactDOMServer.renderToString(element), people: ['chris','lucia'], parttest: 'houhou', title: 'titletest'});
});

// send static files, for testing
router.get('/test1', function(req, res, next) {
    res.sendFile( process.cwd() + '/View/separate.html');
});

module.exports = router;