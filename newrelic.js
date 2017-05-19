'use strict';

exports.config = {
    app_name : ['newswire - '+ (process.env.NODE_ENV || 'local').toUpperCase()],
    license_key : '06248f28ce2b51a4456a9a846baa1b350fc131ba',
    logging : {
        level : 'trace'
    }
};
