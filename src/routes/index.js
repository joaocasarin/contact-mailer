const nodemailer = require('./Nodemailer');

module.exports = app => {
    app.use('/', nodemailer);
};