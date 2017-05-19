'use strict';

var ImdbSearchMovieApiHttpClient = require('../../port/http/ImdbSearchMoviesApiHttpClient'),
	q = require('q');
function MoviesQueryHandler() {}

MoviesQueryHandler.prototype.find = function find(query) {
	var deferred = q.defer();
	console.log('query in handler::', query);
    ImdbSearchMovieApiHttpClient.getMatchedMovies(query)
        .then(function onSuccess(result) {
            return deferred.resolve(result);
        })
        .catch( function onError(error) {
            return deferred.reject(error);
        })
        .done();

    return deferred.promise;
};

module.exports = new MoviesQueryHandler();