const express = require('express');
const dotenv = require('dotenv');
const loaders = require('./src/loaders');

dotenv.config();

async function startServer() {
    const app = express();

    await loaders.init({ expressApp: app });

    app.listen(process.env.PORT, err => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Servidor funcionando na porta: ${process.env.PORT}`);
    });
}

startServer();