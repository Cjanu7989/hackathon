const express = require('express');
const { getAllTeachers, addTeacher } = require('../controllers/teacherController');
const router = express.Router();

router.get('/', getAllTeachers);
router.post('/add', addTeacher);

module.exports = router;
