const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;//db object has all these parts 
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);//schema 

module.exports = db;//using this db object 
