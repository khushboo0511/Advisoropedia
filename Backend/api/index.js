const express = require('express');
const authRoutes = require('./routes/authRoutes');
const postsRoutes = require('./routes/postsRoutes');
const dbConnect = require('./config/database');
const cloudinaryConnect = require('./config/cloudinary');
const cors = require('cors');


require('dotenv').config();



dbConnect();
cloudinaryConnect();

const PORT = process.env.PORT || 6000;
const server = express();

server.use(express.json());
server.use(cors({
    origin: '*'
}));

server.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running ...",
    });
});

// // Auth Routes
server.use("/api/auth", authRoutes);

// // Posts Routes
// server.use("/api/post", postsRoutes);

server.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});
