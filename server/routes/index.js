var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../', '../', 'config'));

router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/public/', 'index.html'));
});


// router.post('/alternate_universes', function(req, res) {

//   var results = [];

//   // Grab data from http request
//   var data = {text: req.body.text, complete: false};

//   // Get a Postgres client from the connection pool
//   pg.connect(connectionString, function(err, client, done) {
//       // Handle connection errors
//       if(err) {
//         done();
//         console.log(err);
//         return res.status(500).json({ success: false, data: err});
//       }

//       // SQL Query > Insert Data
//       client.query("INSERT INTO universes(name, description) values(\"cheesey verse\", \"a yummy place\")", [data.text, data.complete]);

//       // SQL Query > Select Data
//       var query = client.query("SELECT * FROM universes ORDER BY id ASC");

//       // Stream results back one row at a time
//       query.on('row', function(row) {
//         results.push(row);
//       });

//       // After all data is returned, close connection and return results
//       query.on('end', function() {
//         done();
//         return res.json(results);
//       });


//     });
// });


// router.get('/alternate_universes', function(req, res) {

//     var results = [];

//     // Get a Postgres client from the connection pool
//     pg.connect(connectionString, function(err, client, done) {
//         // Handle connection errors
//         if(err) {
//           done();
//           console.log(err);
//           return res.status(500).json({ success: false, data: err});
//         }

//         // SQL Query > Select Data
//         var query = client.query("SELECT * FROM universes ORDER BY id ASC;");

//         // Stream results back one row at a time
//         query.on('row', function(row) {
//             results.push(row);
//         });

//         // After all data is returned, close connection and return results
//         query.on('end', function() {
//             done();
//             return res.json(results);
//         });

//     });

// });

module.exports = router;
