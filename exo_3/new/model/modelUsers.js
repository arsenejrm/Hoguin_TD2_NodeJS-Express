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
})

// Modèle basé sur la collection "produit"
const User = mongoose.model('user', userSchema, 'users');

async function getUserData(find_param = {}) {
    try {
        const user_data = await User.find(find_param).exec();
        return user_data
    } catch (error) {
        console.error("Erreur lors de la récupération :", error);
    }
}

console.log(User);

module.exports = {User: mongoose.model('user', userSchema), getUserData: getUserData};