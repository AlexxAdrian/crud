const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./router');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/proyecto', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Conexión a MongoDB establecida');

        app.use('/', router);

        app.listen(3000, () => {
            console.log('El servidor está corriendo en http://localhost:3000');
        });
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });