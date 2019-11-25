const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler')();

app.use(morgan('dev'));
app.use(express.static('public'));

const ingress = require('./routes/ingress-routes');
const trimet = require('./routes/trimet-routes');

app.use('/ingress', ingress);
app.use('/trimet', trimet);

(app.use)(errorHandler);

module.exports = app;
