'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};
var sequelize = new Sequelize('postgres://localhost:5432/alternate_universes');

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// var pg = require('pg');
// // createdb alternate_universes
// var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/alternate_universes';
// var client = new pg.Client(connectionString);

// client.connect();

// var universe = client.query('CREATE TABLE universes(id SERIAL PRIMARY KEY, name VARCHAR(25) not null unique, description VARCHAR(250) not null)');
// var gifUrl = client.query('CREATE TABLE gifurl(id SERIAL PRIMARY KEY, url VARCHAR(255) not null, universe_id integer REFERENCES universes(id))');

// universe.on('end', function() { client.end(); });
// gifUrl.on('end', function() { client.end(); });


// // Here we create a new instance of Client to interact with the database and then establish communication with it
// // via the connect() method. We then set and run a SQL query via the query() method.
// // curl --data "name=testUniverse&description=whereAllGoodPeopleComeToTest" http://127.0.0.1:3000/alternate_universes