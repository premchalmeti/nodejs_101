const http = require('http');
const empController = require('./api/empController');

const HOST = '0.0.0.0',
      PORT = 8080;


const server = http.createServer((req, res) => {
    let mtd = req.method, 
        path = req.url;
    if (mtd == 'POST' && path == '/api/employee/') {
        empController.registerEmployee(req, res);
    } else if (mtd == 'GET' && path == '/api/employee/') {
        empController.listEmployees(req, res);
    } else if (mtd == 'GET' && path.match(/\/api\/employee\/([0-9a-f-]{36})/)) {
        empController.getEmployee(req, res);
    } else if (mtd == 'PUT' && path.match(/\/api\/employee\/([0-9a-f-]{36})/)) {
        empController.updateEmployee(req, res);
    } else if (mtd == 'DELETE' && path.match(/\/api\/employee\/([0-9a-f-]{36})/)) {
        empController.deleteEmployee(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            'ok': false,
            'err_msg': `No match found ${mtd} ${path}`
        }));
    }
})

server.listen(PORT, HOST, () => {
    console.log(`Server running on ${HOST}:${PORT}`);
})
