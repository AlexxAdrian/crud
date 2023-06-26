const express = require('express');
const router = express.Router();
const User = require('./models/User');

router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            res.render('index.ejs', { results: users });
        })
        .catch((error) => {
            console.error('Error al obtener usuarios:', error);
            res.render('index.ejs', { results: [] });
        });
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((user) => {
            res.render('edit.ejs', { user });
        })
        .catch((error) => {
            console.error('Error al obtener el usuario:', error);
            res.redirect('/');
        });
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id)
        .then(() => {
            res.redirect('/');
        })
        .catch((error) => {
            console.error('Error al eliminar el usuario:', error);
            res.redirect('/');
        });
});

router.post('/save', (req, res) => {
    const { user, rol } = req.body;
    const newUser = new User({ user, rol });
    newUser.save()
        .then(() => {
            res.redirect('/');
        })
        .catch((error) => {
            console.error('Error al guardar el usuario:', error);
            res.redirect('/');
        });
});

router.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const { user, rol } = req.body;
    User.findByIdAndUpdate(id, { user, rol })
        .then(() => {
            res.redirect('/');
        })
        .catch((error) => {
            console.error('Error al actualizar el usuario:', error);
            res.redirect('/');
        });
});

module.exports = router;