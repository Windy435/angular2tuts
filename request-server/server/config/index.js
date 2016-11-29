/**
 * Created by phong.tran.nam on 29/11/2016.
 */
// Mongoose
// ----------------------------------
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// ----------------------------------

// Global
// ----------------------------------
global._base = '/Users/phong.tran.nam/Desktop/Working/Angular2Tuts/request-server';
global.config = {
    port: process.env.PORT || 3000,
    connectionString: process.env.CONNECTIONSTRING || 'mongodb://localhost/request',
    homepage: process.env.HOMEPAGE || 'localhost:3000'
}
// ----------------------------------
