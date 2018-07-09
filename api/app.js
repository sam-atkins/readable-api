const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const auth = require('./handlers/auth');
const routes = require('./routes/index');
const errorHandler = require('./handlers/errorHandler');

const app = express();

app.use(morgan('combined'));

// TODO For dev, enables _all_ COR requests;
// configure per https://github.com/expressjs/cors
app.use(cors());

app.use(auth.authHeadersHandler);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use(errorHandler.notFound);

module.exports = app;
