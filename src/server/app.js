'use strict';

const path = require('path');
const express = require('express');
const port = process.env.PORT || 3030;

let app = express();
let server = require('http').createServer(app);

require('./config/express')(app);

server.listen(port, function () {
    console.log('Express server listening to', port);
});