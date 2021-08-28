const empModel = require('../models/employee')
const qs = require('querystring');
const { getPostData } = require('../utils')


async function registerEmployee(req, res) {
    try {
        let body = await getPostData(req);
        let empJson = "";

        if(req.headers['content-type'] == 'application/x-www-form-urlencoded') {
            empJson = qs.parse(body);
        } else {
            empJson = JSON.parse(body);
        }

        console.log('request body', empJson);
        let newEmp = await empModel.create(empJson);

        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({"ok": true, "data": newEmp}));
    } catch(e) {
        console.error(e);
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            "ok": false,
            "err_msg": "Failed to register employee. Please try again later!"
        }));
    }
}


async function listEmployees(req, res) {    
    try {
        let emps = await empModel.findAll();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({"ok": true, "data": emps}));
    } catch(e) {
        console.error(e);
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            "ok": false,
            "err_msg": "Failed to get employees. Please try again later!"
        }));
    }
}


async function getEmployee(req, res) {    
    try {
        let empId = req.url.split('/')[3];
        let emp = await empModel.findById(empId);

        if (emp) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({"ok": true, "data": emp}));
        } else {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({"ok": true, "err_msg": "Employee not found"}));
        }

    } catch(e) {
        console.error(e);
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            "ok": false,
            "err_msg": "Failed to get employee. Please try again later!"
        }));
    }
}


async function updateEmployee(req, res) {
    try {
        let empId = req.url.split('/')[3];
        let body = await getPostData(req);

        empJson = JSON.parse(body);
        console.log('request body', empJson);
        let updatedEmp = await empModel.update(empId, empJson);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({"ok": true, "data": updatedEmp}));
    } catch(e) {
        console.error(e);
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            "ok": false,
            "err_msg": "Failed to update employee. Please try again later!"
        }));
    }
}


async function deleteEmployee(req, res) {    
    try {
        let empId = req.url.split('/')[3];
        await empModel.deleteEmp(empId);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({"ok": true}));
    } catch(e) {
        console.error(e);
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            "ok": false,
            "err_msg": "Failed to delete employee. Please try again later!"
        }));
    }
}


module.exports = {
    registerEmployee, listEmployees, getEmployee, deleteEmployee,
    updateEmployee
};
