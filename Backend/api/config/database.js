const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://khushboo0511:kkkk1234@cluster0.d7wmjc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MONGODB Connected successfully in database.js");
    } catch (error) {
        console.log("DB Connection failed in database.js, something went wrong");
        console.error(error);
        process.exit(1);
    }
};

module.exports = dbConnect;