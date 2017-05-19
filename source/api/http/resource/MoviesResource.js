'use strict';

/**
 * Represents a OrganizationResource
 *
 * @constructor
 */

 function MoviesResource() {
 	this.moviesQueries = require('../../../application/query/movies_queries');
    this.moviesQueryHandler = require('../../../application/handler/movies_query_handler');
 }

 MoviesResource.prototype.searchByTitle = function searchByTitle(request) {
 	return this.moviesQueryHandler.find(new this.moviesQueries.findQuery(request));
 };

 module.exports = new MoviesResource();