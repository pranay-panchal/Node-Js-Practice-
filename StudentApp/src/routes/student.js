const express = require('express');

const router = express.Router();

const studentController = require('../controller/student.controller');


router.get('/student', studentController.getStudentInfo);
router.get('/student/id/:id', studentController.getStudentById);
router.post('/student', studentController.addStudentInfo);
router.delete('/student/id/:id', studentController.deleteStudentInfo);
//put API

module.exports = router;