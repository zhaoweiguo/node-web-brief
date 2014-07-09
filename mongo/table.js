mongoose = require('mongoose');

exports.user = mongoose.Schema({
    user_id: String,
    target_level: String,
    request_type: String,
    review_status: String,
    document: String,
    post_at: Date
}, {
    versionKey: false
});



