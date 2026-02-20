const mongoose = require('mongoose');

// mongodb://22302352:6hd5kubi@192.168.24.1:27017/22302352_db
// mongodb+srv://arsucompte:doudou78@wlhcamarchemtn.h11o2rx.mongodb.net/
const connect_db = async () => {
    try {
        await mongoose.connect('mongodb://22302352:6hd5kubi@192.168.24.1:27017/22302352_db');
        console.log("Connecté à MongoDB")
    } catch (err) {
        console.log("Erreur lors de la connexion à la base de données : " + err);
        process.exit(1);
    }
};

module.exports = connect_db;