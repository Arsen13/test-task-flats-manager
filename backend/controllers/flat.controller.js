const Flat = require('../models/flat.model');
const { uploadToCloudinary, deleteFromCloudinary } = require('../utils/fileUpload');

const createFlat = async (req, res) => {
    try {
        const { header, description, price, numberOfRooms } = req.body;

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

const findAll = async (req, res) => {
    try {
        const flats = await Flat.find();

        res.status(201).json(flats);
    } catch (error) {
        console.error("Error in 'findAll' controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

const findAllPaginated = async (req, res) => {
    try {
        const {page, limit} = req.params;

        if (!page || !limit) return res.status(404).json({ error: "You missed some params" });

        const flats = await Flat
            .find()
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(201).json(flats);

    } catch (error) {
        console.error("Error in 'findAllPaginated' controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

const updateFlat = async (req, res) => {
    try {
        const flatId = req.params.id;
        const { header, description, price, numberOfRooms } = req.body;

        if (!header && !description && !price && !numberOfRooms && !req.file) {
            return res.status(400).json({ error: "No changes provided" });
        }

        const flat = await Flat.findById(flatId);

        if (!flat) return res.status(404).json({ error: "Flat not found" });

        if (header) flat.header = header;
        if (description) flat.description = description;
        if (price) flat.price = price;
        if (numberOfRooms) flat.numberOfRooms = numberOfRooms;
        if (req.file) {
            if (flat.picture) {
                const publicId = 'flat_pics/' + flat.picture.split('/').pop().split('.')[0];
                await deleteFromCloudinary(publicId);
            }
            const uploadedImg = await uploadToCloudinary(req.file);
            flat.picture = uploadedImg.secure_url;
        }

        await flat.save();

        res.status(201).json(flat);

    } catch (error) {
        console.error("Error in 'updateFlat' controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteFlat = async (req, res) => {
    try {
        const {id: flatId} = req.params;

        const flat = await Flat.findById(flatId);
        if (!flat) return res.status(404).json({ error: "Flat not found" });
        
        if (flat.picture) {
            const publicId = 'flat_pics/' + flat.picture.split('/').pop().split('.')[0];
            await deleteFromCloudinary(publicId);
        }

        await Flat.deleteOne({ _id: flat._id });

        return res.status(201).json({ message: "Flat deleted successfully" });
        
    } catch (error) {
        console.error("Error in 'deleteFlat' controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { createFlat, findAll, findAllPaginated, updateFlat, deleteFlat };