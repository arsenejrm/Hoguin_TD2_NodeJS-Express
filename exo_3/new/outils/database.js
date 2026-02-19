const mongoose = require('mongoose');

// URI de connexion
const uri = 'mongodb://22302352:6hd5kubi@192.168.24.1:27017/22302352_db';
mongoose.connect(uri);


mongoose.connection.on('error', (err) => {
    console.log(err);
});

mongoose.connection.on('open', () => {
    console.log('Connexion réussie.');
});
