const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ravelmello:159753qwas@cluster0-domky.mongodb.net/test?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true
});

module.exports = mongoose;
