const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./src/error-handler')();
const routes = require('./src/routes');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/', routes);

(app.use)(errorHandler);

app.listen(3000, () => console.log('Server is running at http://localhost:3000'));
