var ncp = require('ncp').ncp;
var path = require('path');

ncp.limit = 16;

ncp(path.resolve(__dirname, '../src'), path.resolve(__dirname, '../bin'), function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});
