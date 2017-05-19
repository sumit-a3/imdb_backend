'use strict';

var q = require('q'),
    api = require('./api'),
    imdbSearch = new ImdbSearch();

function ImdbSearch() {}

ImdbSearch.prototype.start = function() {

    var started = Object.keys(api).map(function(key) {
        return api[key].start();
    });
    
    return q.all(started).then(function() {            
        console.log('ImdbSearch server Started.');
    }).catch(function() {
        console.log('Error starting ImdbSearch.');
        process.exit(1);
    }).done();
};

imdbSearch.start();
