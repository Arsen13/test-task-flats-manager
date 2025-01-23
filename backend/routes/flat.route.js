const express = require('express');
const multer = require('multer');
const createValidation = require('../middleware/validation');
const createFlat = require('../controllers/flat.controller');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('picture'), createValidation, createFlat);

module.exports = router;