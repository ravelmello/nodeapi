require('./configs/mongoose');

const express = require('express');
const routes = require('./routes/routes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
    console.log("EU TO AQUI");
});

app.use('/posts', routes);
app.use('/user', userRoutes);


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

