const express = require('express');
const multer = require('multer');
const createValidation = require('../middleware/validation');
const { createFlat, findAll, findAllPaginated, updateFlat } = require('../controllers/flat.controller');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('picture'), createValidation, createFlat);
router.get('/', findAll);
router.get('/:page/:limit', findAllPaginated);
router.put('/:id', upload.single('picture'), updateFlat);

module.exports = router;