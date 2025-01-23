const multer = require('multer');
const cloudinary = require('./cloudinary');

const storage = multer.memoryStorage();

const uploadToCloudinary = async (file) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({ folder: "flat_pics" }, (error, result) => {
            if (error) reject(error);
            resolve(result);
        });

        if (file && file.buffer) {
            uploadStream.end(file.buffer);
        } else {
            reject(new Error("File buffer is undefined"));
        }
    });
};

const deleteFromCloudinary = async (publicId) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
};

module.exports = { storage, uploadToCloudinary, deleteFromCloudinary };