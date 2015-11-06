var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../', '../', 'config'));

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/public/', 'index.html'));
});


router.post('/', function(req, res) {

  var results = [];

  // Grab data from http request
  var data = {name: req.body.name, description: req.body.description};
  console.log(req.body.name);
  console.log(req.body.description);

  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {

      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({ success: false, data: err});
      }      

      // // SQL Query > Insert Data
      var query = client.query("INSERT INTO universes(name, description) values('"+req.body.name+"', '"+req.body.description+"')", function (err, result){
        if(err) {
          // if err universe already exists get universe and description grab it's gif and print out it's info
          done();
          console.log(err.detail);
          return res.json(err.detail);
        } else {
            
        }
      });

      // After all data is returned, close connection and return results
      query.on('end', function() {
        done();
        console.log("hi", results);
        return res.json(results);
      });


    });
});


router.get('/alternate_universes', function(req, res) {

    var results = [];

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM universes ORDER BY id ASC;");

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });

    });

});

module.exports = router;
