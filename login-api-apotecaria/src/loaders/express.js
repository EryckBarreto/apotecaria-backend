const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../api');

module.exports = async ({ app }) => {
    app.get('/status', (req, res) => res.status(200).send('Serviço em funcionamento.'));
    app.head('/status', (req, res) => res.status(200).send('Serviço em funcionamento.'));

    app.enable('trust proxy');

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use('/api', routes);

    return app;
};