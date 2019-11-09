const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ravelmello:159753qwas@cluster0-domky.mongodb.net/test?retryWrites=true&w=majority', {
useNewUrlParser: true,
useFindAndModify: true
});

module.exports = mongoose;
