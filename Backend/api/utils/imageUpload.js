const cloudinary = require('cloudinary');

async function imageUpload(file, options = {}) {
    const { folder, height, quality } = options;

    const uploadParams = {
        path: folder || "dev/",
        file: file,
        resource_type: "auto",
    };

    // Add optional image transformation parameters if provided
    if (height) {
        uploadParams.transform = { height };
    }
    if (quality) {
        uploadParams.transformation = { ...(uploadParams.transformation || {}), quality };
    }

    try {
        const result = await cloudinary.v2.uploader.upload(uploadParams);
        return result;
    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
        throw error; // Re-throw the error for further handling
    }
}

module.exports = imageUpload;
