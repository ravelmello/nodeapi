const Post = require('../models/Post');

class PostController {
    async index (req, res) {
        return res.send(await Post.find({}));
    }

    async show (req, res) {
        const post = await Post.findById(req.params.postId);
        if(post) {
            return res.send(post);
        }
        return res.sendStatus(404);
    }

    async store (req, res) {
        await Post.create(req.body);
        return res.sendStatus(201);
    }

    async update (req, res) {
        try{
            await Post.findOneAndUpdate(req.params.postId, req.body);
            return res.sendStatus(200);
        } catch(err) {
            console.error(err);
        }
    }

    async delete (req, res) {
        try{
            await Post.findByIdAndDelete(req.params.postId);
            return res.sendStatus(200);

        } catch(err) {
            console.error(err);
        }
    }
}

module.exports = new PostController();