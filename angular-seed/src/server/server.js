/**
 * Created by phong.tran.nam on 28/11/2016.
 */
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function (req, res) {

  url = 'http://www.imdb.com/title/tt1229340/';

  request(url, function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var title, release, rating;
      var json = {title: "", release: "", rating: ""};

      $('div.title_wrapper').filter(function () {
        title = $('div.title_wrapper h1').text();
        release = "2013";

        json.title = title;
        json.release = release;
      });

      $('div.ratingValue').filter(function () {
        $('div.ratingValue').text();

        json.rating = rating;
      });
    }

    fs.writeFile('C:/Users/phong.tran.nam/Desktop/Working/Angular2Tuts/angular-seed/src/client/assets/output.json', JSON.stringify(json, null, 4), function (err) {

      console.log('File successfully written! - Check your project directory for the output.json file');

    });

// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
    res.send('Check your console!')
  });
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
