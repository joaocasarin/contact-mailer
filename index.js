const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./src/routes/index')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server initialized. Try it on http://localhost:${process.env.PORT}`);
});