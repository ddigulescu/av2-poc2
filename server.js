'use strict';
const express = require('express');
const reactEngine = require('express-react-engine');
const router = require('./router');

let port = 4000;

const app = express();
app.set('views', __dirname + '/components');
app.engine('jsx', reactEngine({wrapper: 'html.jsx'}));

app.use(router);
app.listen(port);
console.log('app started');
