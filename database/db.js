const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/proyecto', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Conexión a MongoDB establecida');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });