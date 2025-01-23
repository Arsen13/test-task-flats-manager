const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error(`Error connection to mongoDB: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectToDB;