const mongoose = require('mongoose');

module.exports = async () => {
    const uri = process.env.DATABASE_URI;
    if (!uri) {
        throw new Error('DATABASE_URI não está definida');
    }
    
    console.log('Tentando conectar ao MongoDB...');
    
    await mongoose.connect(uri);
    console.log('MongoDB conectado com sucesso');
};