const express = require('express');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Accept, Origin, X-Requested-With, Content-Type, Authorization, Token');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./src/routes/index')(app);

app.listen(process.env.PORT);