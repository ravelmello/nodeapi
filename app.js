require('./configs/mongoose');

const express = require('express');
const routes = require('./routes/routes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const commentRoutes = require('./routes/commentRoute');
const authMiddleware = require('./midlewares/authMidleware');

const app = express();
app.use(express.json());

app.get('/',(req,res) => {
   res.send('I am a TEAPOT');
});


app.use('/auth', authRoutes);

app.use(authMiddleware);
app.use('/posts', routes);
app.use('/user', userRoutes);
app.use('/comments', commentRoutes);



//error handler -> o primeiro parametro é de erro, lembrar de ser os parametros na mesma ordem
app.use((err, req, res, next) => {
    if(err && err.error && err.error.isJoi) {
        console.log("Entrou no error handler");
        res.status(400).json({
            type: err.type,
            message: err.error.toString()
        });
    } else {
        next(err)
    }
});

app.listen('3000', () => {
    console.log("Server Start");
}); 

