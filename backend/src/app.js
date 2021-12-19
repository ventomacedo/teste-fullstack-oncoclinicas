require('dotenv').config({ path: process.env.NODE_ENV === "test" ? '.env.test' : '.env' });

const express = require('express');
const routes  = require('./routes');
const cors    = require('cors');

class App {
    constructor() {
        this.server = express();
        this.routes();
    }

    routes() {
        this.server.use(express.json());
        this.server.use(cors({ origin: "*" }));
        this.server.use('/api/v1', routes);
    }
}

module.exports = new App().server;