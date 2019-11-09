const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxlength: 120
    },
    text: {
        type: String,
        require: true,
        maxlength: 500
    }
}, {timestamps: true}); // add the createdAt and modifiedAt confs

module.exports = mongoose.model('Post', PostSchema);