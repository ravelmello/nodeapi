const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    comment: {
        type: String,
        required: true,
        maxlength: 500
    },
    likes : {
        type: Number,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post',
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Comment', CommentSchema);