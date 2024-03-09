const cloudinary = require('cloudinary').v2;

const cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API,
            api_secret: process.env.CLOUD_API_SECRET,
        });
        console.log("cloudinary connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = cloudinaryConnect;
