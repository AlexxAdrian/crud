const User = require('../models/User');

function save(req, res) {
    const { user, rol } = req.body;
    const newUser = new User({ user, rol });
    newUser
        .save()
        .then(() => {
            res.redirect('/');
        })
        .catch((error) => {
            console.error('Error al guardar el usuario:', error);
            res.redirect('/');
        });
}

function update(req, res) {
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
}

module.exports = {
    save,
    update,
};