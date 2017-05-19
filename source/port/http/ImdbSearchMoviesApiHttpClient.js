'use strict';

var IMDB_SEARCH_API_URL = require('../../../config/index').IMDB_SEARCH_API_URL,
	q = require('q'),
	request = require('request');;

function ImdbSearchMovieApiHttpClient(){}

ImdbSearchMovieApiHttpClient.prototype.getMatchedMovies = function getMatchedMovies(imdbRequest) {
	console.log('I am in http client', IMDB_SEARCH_API_URL);
	var deferred = q.defer(),
		options = {
            url: IMDB_SEARCH_API_URL,
            method: 'GET',
            qs: {
            	json: true,
            	nr: true,
            	tt: 'on',
            	q: imdbRequest.searchText
        	}
        };
    console.log('options::', options);
    request(options, function(error, response, body) {
        if(error) {
            deferred.reject(error);
        } else {
        	console.log("response::", body);
            if(response.statusCode < 200 || response.statusCode >= 400) {
                deferred.reject(body ? (body.message || body.error || body) : {message:'Platform returned unexpected response code: ' + response.statusCode});
            } else {
                deferred.resolve(body);
            }
        }
    });

    return deferred.promise;
}

module.exports = new ImdbSearchMovieApiHttpClient();