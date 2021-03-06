/**
 * Created by jabue on 16-06-15.
 */
// mongo db
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var mongoConfig = require('../Config/MongoConfig');

var exports = module.exports = {};

var mongoDb;

exports.getDBConnection = function() {
    if(mongoDb) {
        return mongoDb;
    } else {
        MongoClient.connect(mongoConfig.mongoUrl, function(err, db) {
            if(err) {
                return null;
            } else {
                mongoDb = db;
                return db;
            }
        });
    }
}

exports.connectMonogoDB = function() {
    console.log('Connecting mongodb...');
    mongoose.connect(mongoConfig.mongoUrl);
}