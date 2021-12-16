const express = require('express');
const routes = require('./routes');

class App {
    constructor() {
        this.server = express();
        this.routes();
    }

    routes() {
        this.server.use(express.json());
        this.server.use('/api/v1', routes);
    }
}

module.exports = new App().server;