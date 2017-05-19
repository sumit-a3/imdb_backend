/**
 * This is a sample implementation of starting a Hapi Server. This is not fully built out.
 */

'use strict';

var Hapi = require('hapi'),
    swagger = require('hapi-swagger'),
    q = require('q'),
    jwt = require('jsonwebtoken'),
    Inert = require('inert'),
    Vision = require('vision'),
    hapiAuth = require('hapi-auth-jwt'),
    routes = require('./routes'),
    privateKey = require('../../../config/index').JWT_PRIVATE_KEY;

function HttpApi() {
    this.server = new Hapi.Server({
        connections: {
            routes: {
                cors: true,
                state: {
                  failAction: 'ignore'
                },
                timeout: {
                  // by default, node sockets automatically timeout after 2 minutes, so overriding it to be timed out in 5 minutes
                  socket : process.env.SOCKET_TIMEOUT || 300000,
                  server : (process.env.SOCKET_TIMEOUT || 300000) -1
                }
            }
        }
    });
};

/**
 * Kick starts the hapi server
 * @param options
 */
 var token = jwt.sign({ accountId: 123 }, privateKey, { algorithm: 'HS256'} );
 var validate = function (request, decodedToken, callback) {

    var error,
        credentials = accounts[decodedToken.accountId] || {};

    if (!credentials) {
        return callback(error, false, credentials);
    }

    return callback(error, true, credentials)
};


HttpApi.prototype.start = function startHapiServer() {
    this.server.connection({port: require('../../../config/index').PORT});
    this.server.route(routes);

    this.server.register(hapiAuth, function callback(err) {
        this.server.auth.strategy('token', 'jwt', {
            key: privateKey,
            validateFunc: validate,
            verifyOptions: { algorithms: [ 'HS256' ] }  // only allow HS256 algorithm
        });
    }.bind(this));
    this.server.start(function startServerCallback(error) {
        if(error){
            console.log('HTTP STARTUP ERROR', error);
            return;
        }
        console.log('IMDB backend process running at: ' + this.server.info.uri);
        return;
    }.bind(this));
};

/**
 * Stops the hapi server process
 */
HttpApi.prototype.stop = function stopHapiServer() {
    this.server.stop(function stopServerCallback(error) {
        console.log('IMDB backend process stopped.');
    });
};

module.exports = new HttpApi();

