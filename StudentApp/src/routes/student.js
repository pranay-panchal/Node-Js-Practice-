const express = require('express');

const router = express.Router();

const path = require('path');

const studentController = require('../controller/student.controller');


router.get('/student', studentController.getStudentInfo);
router.get('/student/id/:id', studentController.getStudentById);
router.post('/student', studentController.addStudentInfo);
router.delete('/student/id/:id', studentController.deleteStudentInfo);

//below method only for practice purposes
router.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, '../','views','test.html'));
});
//put API

module.exports = router;