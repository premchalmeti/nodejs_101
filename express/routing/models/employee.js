const employees = require('../data/employees.json');
const {writeDataToFile} = require('../utils');
const {v4: uuid} = require('uuid');
const path = require('path');

DATA_FILE =  path.join(path.dirname(__dirname), '/data/employees.json');

function _getObj(empJson) {
    return {
        id: empJson.id,
        name: empJson.name,
        company_id: empJson.company_id
    };
}

function _createObj(empJson) {
    let empObj = _getObj(empJson);
    empObj.id = uuid();
    return empObj;
}

function findById(id) {
    if(!employees || employees.length == 0)
        return null;
    return employees.find(e => e.id === id);
}

function findAll() {
    return employees || [];
}


function create(empJson) {
    let empObj = _createObj(empJson);

    employees.push(empObj);

    writeDataToFile(DATA_FILE, employees);

    return empObj;
}


function update(id, empJson) {
    let i = employees.findIndex(e => e.id === id);

    if(i === -1) throw new Error(`Employee(${id}) not found`);

    let empObj = _getObj(empJson);

    employees.splice(i, 1, empObj);

    writeDataToFile(DATA_FILE, employees);
}


function remove(id) {
    let i = employees.findIndex(e => e.id === id);

    if(i === -1) throw new Error(`Employee(${id}) not found`);

    employees.splice(i, 1);

    writeDataToFile(DATA_FILE, employees);
}


module.exports = {
    findById,
    findAll,
    create,
    update,
    remove
}
