const StudentRepo = require('../repository/student.repository');


class StudentBiz {
    getStudent() {
        return new Promise(async (resolve, reject) => {
            try {
                const studentRepo = new StudentRepo();
                const data = await studentRepo.fetchStudentInfo();
                if (data < 0) {
                    reject(error);
                }
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }

    addStudent(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const studentRepo = new StudentRepo();
                const resp = await studentRepo.addStudentInfo(data.name, data.dob, data.gender, data.address, data.contact_no);
                if (resp === false) {
                    reject(error.message);
                }
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

    getStudentById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const studentRepo = new StudentRepo();
                const data = await studentRepo.fetchStudentInfoById(id);
                if (!data) {
                    reject(error);
                }
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }

    deleteStudent(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const studentRepo = new StudentRepo();
                await studentRepo.deleteStudent(id);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = StudentBiz;