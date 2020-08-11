const express = require('express');

const router = express.Router();

const path = require('path');

const studentController = require('../controller/student.controller');

/**
 * @author Pranay P.
 * @description below are all the routes, Enjoy!
 */

router.get('/student', studentController.getStudentInfo);
router.get('/student/id/:id', studentController.getStudentById);
router.post('/student', studentController.addStudentInfo);
router.delete('/student/id/:id', studentController.deleteStudentInfo);

// Sample route for heroku POC
router.get('/mygames', studentController.sampleGetRouteForHeroku);

//below method only for practice purposes
router.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, '../','views','test.html'));
});
//put API

module.exports = router;