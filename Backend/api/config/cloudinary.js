const cloudinary = require('cloudinary').v2;

const cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: 'dpnd3k5u5',
            api_key: '631785888144138',
            api_secret: 'uN7nSCc5MI-YVDxAS6LhxM5iksE',
        });
        console.log("cloudinary connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = cloudinaryConnect;
