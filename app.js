const express = require('express');
const routes = require('./routes');

const app = express();

const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
if (NODE_MAJOR_VERSION != 14) {
  throw new Error('You are using a version of NodeJS that is to high or to low. Please use NodeJS Version 14');
}


app.use(express.static('public'));
app.use('/calc', routes);

module.exports = app    