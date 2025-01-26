const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDB = require('./db/connectToDB');
const flatRoutes = require('./routes/flat.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(async (req, res, next) => {
    try {
        await connectToDB();
        next(); 
    } catch (error) {
        console.error("DB connection error:", error);
        res.status(500).json({ error: "Database connection failed" });
    }
});

app.use('/api/flat', flatRoutes);

module.exports = (req, res) => app(req, res);

// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const connectToDB = require('./db/connectToDB');
// const flatRoutes = require('./routes/flat.route');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });

// app.use('/api/flat', flatRoutes);
// app.get('/api/test', (req, res) => {
//     res.send('API works');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//     connectToDB();
// })