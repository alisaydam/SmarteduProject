const express = require('express');
const courseController = require('../controllers/courseController');
const roleMiddlaware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.route('/').post(roleMiddlaware(["teacher", "admin"]), courseController.createCourse); //* http://localhost: 3000/courses requestleri buraya gelir.
router.route('/').get(courseController.getAllCourses); //* http://localhost: 3000/courses requestleri buraya gelir.
router.route('/:slug').get(courseController.getCourse); //* http://localhost: 3000/courses/id requestleri buraya gelir.
router.route('/:slug').delete(courseController.deleteCourse); //* http://localhost: 3000/courses/id requestleri buraya gelir.
router.route('/:slug').put(courseController.updateCourse); //* http://localhost: 3000/courses/id requestleri buraya gelir.
router.route('/enroll').post(courseController.enrollCourse); //* http://localhost: 3000/courses requestleri buraya gelir.
router.route('/release').post(courseController.releaselCourse); //* http://localhost: 3000/courses requestleri buraya gelir.

module.exports = router;
 