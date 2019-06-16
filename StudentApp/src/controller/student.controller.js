const StudentBiz = require('../biz/student.biz');
const ResponseModel = require('../models/responseModel.models');

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
            await studentBiz.addStudent(data);
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
            const studentBiz = new StudentBiz();
            const responseModel = new ResponseModel();
            const data = await studentBiz.getStudentById(id);
            responseModel.sucess = true;
            responseModel.data = data;
            response.status(200).json(responseModel);
        } catch (error) {
            response.status(500).json({
                sucess: false,
                error: error.message
            });
        }
    }
}