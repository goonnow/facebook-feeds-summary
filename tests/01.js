var newsFeed = require('../');
var fs = require('fs');
var readJSON = require('read-json');


readJSON('./tests/data/feeds.json', function(error, data){
    newsFeed.summy(data);
});
