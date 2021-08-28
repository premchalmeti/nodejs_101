const empModel = require('../../models/employee')


function getEmployee(id) {
    return new Promise((s, e) => {
        try {
            let empObj = empModel.findById(id);
            if(!empObj) {
                throw new Error(`Employee(${id}) not found`)
            }
            s(empObj);
        } catch(err) {
            e(err);
        }
    })
}


function getEmployees() {
    return new Promise((s, e) => {
        try {
            let emps = empModel.findAll();
            s(emps);
        } catch(err) {
            e(err);
        }
    })
}


function registerEmployee(empJson) {
    return new Promise((s, e) => {
        try {
            let empObj = empModel.create(empJson);
            s(empObj);
        } catch(err) {
            e(err);
        }
    })
}


function updateEmployee(id, empJson) {
    return new Promise((s, e) => {
        try {
            empModel.update(id, empJson);
            s();
        } catch(err) {
            e(err);
        }
    })
}


function deleteEmployee(id) {
    return new Promise((s, e) => {
        try {
            empModel.remove(id);
            s();
        } catch(err) {
            e(err);
        }
    })
}


module.exports = {
    getEmployee,
    getEmployees,
    registerEmployee,
    updateEmployee,
    deleteEmployee
}
