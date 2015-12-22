require('dotenv').load();
var express = require('express');
var router = express.Router();
var path = require('path');
var request = require("request");
var models = require('../models/index');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/public/', 'index.html'));
});


// get request on post if exists in db show, else post

router.get('/universe', function(req, res) {

  // gif = new Promise(function (resolve, reject) {
  //   request('https://www.googleapis.com/customsearch/v1?key='+SEARCH_KEY+'&cx=008695872185510260610:-95vdil7b6k&q='+req.body.name+' animated gif&searchType=image', function (error, response, html) {
  //     if (!error && response.statusCode == 200 && (JSON.parse(html).searchInformation.totalResults !== '0')) {
  //       resolve(html);
  //     } else {
  //       reject(error);
  //     } 
  //   });
  // });

  models.Universe.find({
    name: req.body.name
  }).then(function(success){
    console.log(success);
  });

  // models.Universe.create({
  //   name: req.body.name,
  //   description: req.body.description
  // }).then(function(success){
  //   gif.then(function(success){

  //     var links = [];

  //     models.Universe.find({ // find universe id where name = req.body.name
  //       where: {
  //         name: req.body.name
  //       }
  //     }).then(function(success){
  //       var parseHtml = JSON.parse(success);
  //       for (var i=0; i<parseHtml.items.length; i++) {
  //         links.push(parseHtml.items[i].link);
  //         models.Url.create({
  //           url: parseHtml.items[i].link,
  //           universe_id: result.rows[0].id
  //         }).then(function(success){
  //           res.json(links);
  //         });
  //       }
  //     });
  //   }).catch(function(err){
  //     console.log("Error:", err);
  //   });
  // });
});

module.exports = router;
