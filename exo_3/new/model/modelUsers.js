var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    mdp: {
        type: String,
        required: true
    }
}, function (err, result) {})

// Modèle basé sur la collection "produit"
const User = mongoose.model('user', userSchema, 'users');

module.exports = User;