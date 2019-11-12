const Comment = require('../models/Comment');
const Post = require('../models/Post'); 

class CommentController {

    async store(req, res) {
        const commentToSave = await Comment.create({
            ...req.body, //spread operator
            likes: 0,
            post: req.params.postId,
            author: req.userId // get th    is user from JWT 
        });

        const post = await Post.findById(req.params.postId); //update the reference inside the post

        post.comments.push(commentToSave.id);
        await post.save();
        return res.sendStatus(201);
    }

    async like(req, res) {
        await Comment.findByIdAndUpdate(req.params.commentId, {
            $inc : {
                likes: 1  // incremental operate, is the same thing of likes++ or likes+1
            }
        });

        return res.send(200).json({
            message: "Everything is fine"
        })
    }
}

module.exports = new CommentController();