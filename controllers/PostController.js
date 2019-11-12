const Post = require('../models/Post');

class PostController {
    async index (req, res) {
        return res.send(await Post.paginate({}, {
            page: req.query.page || 1,
            limit: 2,
            sort: 'createdAt',
            populate: {
                path: 'author',
                select: 'name email'
            }
        }));
    }

    async show (req, res) {
        const post = await Post.findById(req.params.postId)
        .populate('author', 'name email')
        .populate({
            path: 'comments',
            populate: {
                path: 'author',
                select: 'name email'
            }
        });
        if(post) {
            return res.send(post);
        }
        return res.sendStatus(404);
    }

    async store (req, res) {
        await Post.create({...req.body, author: req.userId}); // using a spread operation
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