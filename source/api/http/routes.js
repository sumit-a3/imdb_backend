'use strict';
var Joi = require('joi'),
	httpReply = require('../../utils/httpReply').httpReply,
	moviesResource = require('./resource/MoviesResource');

module.exports = [{
        method: 'GET',
        path: '/search',
        config: {
            handler: function searchMoviesByTitle(request, reply) {
            	console.log("request::",request.query);
                return httpReply(moviesResource.searchByTitle(request.query), reply);
            },
            tags: ['api'],
            description: 'API to search IMDB movies',
            notes: 'A REST web service',
            plugins: {
                'hapi-swagger': {
                    responseMessages: [
                        { code: 400, message: 'Bad Request' },
                        { code: 500, message: 'Internal Server Error'}
                    ]
                }
            },
            validate: {
                /*headers: Joi.object({
                    authorization: Joi.string().required()
                }).unknown()*/
            }
        }
    }]; 