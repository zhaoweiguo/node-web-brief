var mongoose = require('mongoose');
var config = require('../config/app');
var table = require('./table');

console.log(config.mongo);
try {
    mongoose.connect(config.mongo);

    var user_model = mongoose.model('User', table.user);
    var userlist = user_model.find({}, function(err, result) {
        console.log(result);
    }).limit(2)
} catch(ex) {
    console.log(ex);
    return;
}






