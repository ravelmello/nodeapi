const User = require('../models/User');

class UserController{
    async index (req, res) {
        return res.send(await User.find({}));
    }

    async show(req, res) {
        const user = await User.findById(req.params.userId);

        if(user){
            return res.send(user);
        }
        return res.sendStatus(404, function(err){
            console.log(err.error)
        });
    }

    async store (req, res) {
       const { email } = req.body;

       if(await User.findOne({email})){
           console.log(email);
           return res.send({
               err: 'E-mail already registred',
               status: 400
           });
       } else {
        const user = await User.create(req.body);
        console.log(user);
        return res.status(201).send(user);
       }
     }

    async update (req, res) {
        try{
            await User.findOneAndUpdate(req.params.userId, req.body);
            return res.sendStatus(200);
        } catch(err) {
            console.error(err);
        }
    }

    async delete (req, res) {
        try{
            await User.findByIdAndDelete(req.params.userId);
            return res.sendStatus(200);

        } catch(err) {
            console.error(err);
        }
    }
}

module.exports = new UserController();