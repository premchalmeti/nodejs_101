const express = require('express');

const empCtl = require('../modules/employees/controller');

const empRouter = express.Router();


empRouter.get('/:id?/', empCtl.getEmployees);

empRouter.post('/', empCtl.registerEmployee);

empRouter.put('/:id/', empCtl.updateEmployee);

empRouter.delete('/:id/', empCtl.deleteEmployee);

module.exports = empRouter;
