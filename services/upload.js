const multer = require("multer");
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require ("multer-storage-cloudinary")

//connect to Cloudinary to get Credentials

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

//define storage

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "app",
        allowedFormats: ["jpg", "png", "jpeg"],
        transformation: [{ height: 500, width: 500, crop: "limit" }],
    },
    });

const upload = multer({ storage: storage});

module.exports = upload