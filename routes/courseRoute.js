const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse); //* http://localhost: 3000/courses requestleri buraya gelir.
router.route('/').get(courseController.getAllCourses); //* http://localhost: 3000/courses requestleri buraya gelir.

module.exports = router;
