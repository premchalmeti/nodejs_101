const employees = require('../data/employees.json');
const {v4: uuid4} = require('uuid');
const { writeDataToFile } = require('../utils');


function create(empJson) {
    return new Promise((successCb, errorCb) => {
        if(!empJson) {
            errorCb(null);
            return
        }
        let newEmp = {id: uuid4(), ...empJson};
        employees.push(newEmp);
        writeDataToFile('./data/employees.json', employees);
        successCb(newEmp);
    });
}


function findAll() {
    return new Promise((successCb, errorCb) => {
        successCb(employees);
    });
}


function findById(empId) {
    return new Promise((successCb, errorCb) => {
        let emp = employees.find(e => e.id == empId);
        console.log(emp);
        successCb(emp);
    });
}


function update(empId, empJson) {
    return new Promise((successCb, errorCb) => {
        if(!empId || !empJson) {
            errorCb(null);
            return
        }
        const empIndex = employees.findIndex(e => e.id == empId);
        employees[empIndex] = {id: empId, ...empJson};
        writeDataToFile('./data/employees.json', employees);
        successCb(employees[empIndex]);
    });
}


function deleteEmp(empId) {
    return new Promise((successCb, errorCb) => {
        let empIndex = employees.findIndex(e => e.id == empId);
        employees.splice(empIndex, 1);
        writeDataToFile('./data/employees.json', employees);
        successCb(true);
    });
}


module.exports = {create, findAll, findById, deleteEmp, update};
