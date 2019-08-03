const mysql = require('../db/mysql');
const StudentResponseModel = require('../models/student-responseModel.models');

class StudentRepo {
    fetchStudentInfo() {
        return new Promise(async (resolve, reject) => {
            try {
                const student = [];
                const query = `SELECT * FROM student`;
                const data = await mysql.execute(query, []);
                if (data.length < 0) {
                    reject(error);
                }
                data.forEach(element => {
                    student.push(new StudentResponseModel(element.id, element.name, element.dob,
                        element.gender, element.address, element.contact_no));
                });
                resolve(student);
            } catch (error) {
                reject(error);
            }
        });
    }

    addStudentInfo(name, dob, gender, address, contact_no) {
        return new Promise(async (resolve, reject) => {
            try {
                const query = `INSERT into student (name,dob,gender,address,contact_no) VALUES (?,?,?,?,?)`;
                await mysql.execute(query, [name, dob, gender, address, contact_no]);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        })
    }

    fetchStudentInfoById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const query = `SELECT * from student WHERE id = ?`;
                const student = [];
                const data = await mysql.execute(query, [id]);
                if (!data) {
                    reject(error);
                }
                student.push(new StudentResponseModel(data[0].id, data[0].name, data[0].dob, data[0].gender, data[0].address, data[0].contact_no));
                resolve(student);
            } catch (error) {
                reject(error)
            }
        });
    }

    deleteStudent(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const query = `DELETE from student WHERE id = ?`;
                const data =  await mysql.execute(query, [id]);
                if(data.affectedRows === 0) {
                    reject(error);
                }
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = StudentRepo;