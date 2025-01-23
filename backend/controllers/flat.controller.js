const Flat = require('../models/flat.model');
const { uploadToCloudinary } = require('../utils/fileUpload');

const createFlat = async (req, res) => {
    try {
        const { header, description, price, numberOfRooms, picture } = req.body;

        const uploadPicture = await uploadToCloudinary(req.file);
        
        const newFlat = new Flat({
            header,
            description,
            price,
            numberOfRooms,
            picture: uploadPicture.secure_url,
        });

        await newFlat.save();

        res.status(201).json(newFlat);

    } catch(error) {
        console.error("Error in 'createFlat' controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = createFlat;