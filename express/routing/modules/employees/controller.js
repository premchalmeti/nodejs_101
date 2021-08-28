const empService = require('./service');


function getEmployees(req, res) {
    if(req.params.id) {
        empService.getEmployee(req.params.id).then(empObj => {
            res.json({ok:true, data: empObj});
        }).catch((err) => {
            res.json({ok: false, err_msg: err.message});
        })
    } else {
        empService.getEmployees().then(emps => {
            res.json({ok:true, data: emps});
        }).catch((err) => {
            res.json({ok: false, err_msg: err.message});
        });
    }
}


function registerEmployee(req, res) {
    empService.registerEmployee(req.body).then(empObj => {
        res.json({ok: true, data: empObj});
    }).catch((err) => {
        res.json({ok: false, err_msg: err.message});
    })
}


function updateEmployee(req, res) {
    empService.updateEmployee(
        req.params,id, req.body
    ).then(()=>{
        res.json({ok: true});
    }).catch((err) => {
        res.json({ok: false, err_msg: err.message});
    })
}


function deleteEmployee(req, res) {
    empService.deleteEmployee(req.params.id).then(()=>{
        res.json({ok: true});
    }).catch((err) => {
        res.json({ok: false, err_msg: err.message});
    })
}


module.exports = {
    getEmployees,
    registerEmployee,
    updateEmployee,
    deleteEmployee
}
