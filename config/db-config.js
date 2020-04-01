/**
 * @description database configuration
 */

'use strict';

if (process.env.NODE_ENV === 'dev') {
    exports.config = {
        PORT : 8000,
        dbURI : 'mongodb://localhost:27017/test_db'
    }
}
else if (process.env.NODE_ENV === 'live') {
    exports.config = {
        PORT : 8000,
        dbURI : 'mongodb://localhost:27017/test_db'
    }
}
else {
    exports.config = {
        PORT : 8000,
        dbURI : 'mongodb://85.187.132.12:27017/test_db'
    };
}