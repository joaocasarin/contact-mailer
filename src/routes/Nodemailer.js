const NodemailerController = require('../controllers/Nodemailer');
const express = require('express');
const router = express.Router();

const Mailer = new NodemailerController();

router.post('/send', Mailer.sendMail);

module.exports = router;