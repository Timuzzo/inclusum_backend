const express = require('express');
const upload = require('../services/upload');

const { uploadAvatarImage, getAvatar } = require("../controllers/uploadAvatar");

const app = express.Router();
app.get('/getavatar', getAvatar);
app.post('/uploadavatar', uploadAvatarImage);

module.exports = app;