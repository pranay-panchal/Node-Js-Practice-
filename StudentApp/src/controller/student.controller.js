const StudentBiz = require('../biz/student.biz');
const ResponseModel = require('../models/responseModel.models');
const herokuSampleJson = require('../data.json');

module.exports = {
    getStudentInfo: async (request, response) => {
        try {
            const studentBiz = new StudentBiz();
            const responseModel = new ResponseModel();
            const data = await studentBiz.getStudent();
            if (data.length < 0) {
                responseModel.sucess = false;
                responseModel.data = 'OOps something went wrong..'
            } 
            responseModel.sucess = true;
            responseModel.data = data;
            response.status(200).json(responseModel);
        } catch (error) {
            response.status(500).json({
                sucess: false,
                error: error.message
            });
        }
    },

    addStudentInfo: async(request, response) => {
        try {
            const data = request.body;
            const studentBiz = new StudentBiz();
            const resp =  await studentBiz.addStudent(data);
            if(resp === true) {
                console.log('Record added successfully!');
            }
            response.status(200).json({
                sucess: true,
                record_added : true
            })
        } catch (error) {
            response.status(500).json({
                sucess: false,
                error: error.message
            });
        }
    },

    getStudentById: async(request, response) => {
        try {
            const id = request.params.id;
            if(!id) {
                response.status(404).json({
                    sucess: false,
                    message: 'Student Id is missing'
                })
            }
            const studentBiz = new StudentBiz();
            const responseModel = new ResponseModel();
            const data = await studentBiz.getStudentById(id);
            responseModel.sucess = true;
            responseModel.data = data;
            response.status(200).json(responseModel);
        } catch (error) {
            response.status(500).json({
                sucess: false,
                message: 'Record not found.'
            });
        }
    },

    deleteStudentInfo: async(request, response) => {
        try {
            const id = request.params.id;
            if(typeof id === 'string') {
                response.status(400).json({
                    sucess: false,
                    message: 'Given id should be a number.'
                })
            }
            const studentBiz = new StudentBiz();
            const resp =  await studentBiz.deleteStudent(id);
            response.status(200).json({
                sucess: true,
                message: 'Record deleted sucessfully.'
            });
        } catch (error) {
            response.status(500).json({
                sucess: false,
                message: 'record not found or record already deleted'
            });
        }
    },

    sampleGetRouteForHeroku: async(req, res) => {
        try {
            res.send(
                herokuSampleJson
            );
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error.message
            })
        }
    }
}