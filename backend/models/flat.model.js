const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema(
    {
        header: { type: String, required: true, maxLength: 90 },
        description: { type: String, required: true, maxLength: 335 },
        price: { type: Number, required: true },
        numberOfRooms: { type: Number, required: true },
        picture: { type: String, required: true },
    }
)

const Flat = mongoose.model("Flat", flatSchema);
module.exports = Flat;