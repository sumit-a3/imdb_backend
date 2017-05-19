'use strict';

function httpReply(promise, reply) {
    promise
        .then(function(result){
            return reply(result);
        })
        .catch(function(error) {
            return reply(BaseErrorAdapter.toBoom(error));
        });
}

module.exports = {
    httpReply: httpReply
};
