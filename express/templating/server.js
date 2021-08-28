const express = require('express');
const pug = require('pug');
const {getEmployee, getEmployees} = require('./models/employee');

const app = express();

app.set('view engine', 'pug');

const HOST = process.env.HOST || '0.0.0.0',
    PORT = process.env.PORT || 8080;


app.get('/api/employees/', (req, res)=>{
    res.render('employees.pug', {
        "employees": getEmployees()
    });
});


app.get('/api/employees/:id/', (req, res)=>{
    res.render('employee_details.pug', {
        "employee": getEmployee(req.params.id)
    });
});


app.get('*', (req, res)=>{
    res.redirect('/api/employees/');
})

app.listen(PORT, HOST, ()=> {
    console.log(`Server running on ${HOST}:${PORT}`);
});
