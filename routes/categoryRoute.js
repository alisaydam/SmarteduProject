const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/').post(categoryController.createCategory); //* http://localhost: 3000/categories requestleri buraya gelir.
router.route('/:id').delete(categoryController.deleteCategory);  

module.exports = router;
