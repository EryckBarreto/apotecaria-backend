const express = require('express');
const dotenv = require('dotenv');
const loaders = require('./src/loaders');

dotenv.config();

async function startServer() {
    const app = express();

    try {
        await loaders({ expressApp: app });
        app.listen(process.env.PORT, err => {
            if (err) {
                console.error('Erro ao iniciar o servidor:', err);
                process.exit(1);
            }
            console.log(`Servidor funcionando na porta: ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
        process.exit(1);
    }
}

startServer();