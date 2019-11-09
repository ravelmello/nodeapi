const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 200
    },
    email: {
        type: String,
        require: true,
        maxlength: 250,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, {timestamps: true});

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 8);
});

module.exports = mongoose.model('User', UserSchema);