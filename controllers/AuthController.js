const models = require('../models');

class AuthController {  

    async store (req, res) {
        const {email, password} = req.body; //descontruction of object

        console.log(req.body);

        const user = await models.User.findOne({email});

        if(!user || !await user.compareHash(password)) {
            return res.sendStatus(400, json({
                error: "Not find user"
            }))
        }

        return res.json({
            token: models.User.produceToken(user)
        });
    }

}

module.exports = new AuthController();