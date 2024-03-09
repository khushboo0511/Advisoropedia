const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("MONGODB Connected successfully in database.js");
    })
    .catch((error) => {
        console.log("DB Connection failed in database.js, something went wrong");
        console.error(error);
        process.exit(1);
    });
};

module.exports = dbConnect;
