class StudentResponseModel {
    constructor(id, name, dob, gender, address, contact_no) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
        this.contact_no = contact_no;
    } 
}

module.exports = StudentResponseModel;