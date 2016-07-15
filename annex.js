
var annex = require('../aiport-dev/dev.js').annex;
var package = require('../aiport-package/package.js');

var annexes = annex( 
    __dirname + "/annexes.jade",
    query => Promise.resolve({ annexes: package.installed().annex }) );

module.exports = annexes;

