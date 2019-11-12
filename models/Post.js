const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, // similar a uma FK
        ref: 'User',
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, // Belongs to many
        ref: 'Comment',
        required: true
    }]
}, {timestamps: true}); // add the createdAt and modifiedAt confs

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post', PostSchema);