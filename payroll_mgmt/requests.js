const http = require('http');
const qs = require('querystring');


function getResponseData(res){
    return new Promise((resCb, rejCb)=>{
        let data = "";

        res.on('data', (chunk)=>{
            data += chunk;
        });

        res.on('end', ()=>{
            resCb(JSON.parse(data));
        });
    })
}


const BASE_URL = 'http://localhost:8080/api/employee/';


function getEmployee(id=null) {
    let url = id?`${BASE_URL}${id}/`:BASE_URL;

    return new Promise((resolve, reject)=> {
        http.get(url, async (res) => {
            let resJson = await getResponseData(res);

            if(res.statusCode != 200) reject(resJson.err_msg);

            resolve(resJson.data);
        });
    });
}


function registerEmployee(empJson) {
    return new Promise((resolve, reject) => {
        let reqBody = JSON.stringify(empJson);

        const options = {
            hostname: 'localhost',
            port: 8080,
            path: '/api/employee/',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': reqBody.length
            }
        }

        req2 = http.request(options, async (res) => {
            let resJson = await getResponseData(res);

            if (res.statusCode != 201) reject(resJson.err_msg);

            resolve(resJson);
        });
        req2.on('error', (e)=>{
            console.error(`Problem with request: ${e.message}`);
        })
        
        req2.write(reqBody);
        req2.end();
    });
}


function deleteEmployee(id){
    return new Promise((resolve, reject)=> {
        const req = http.request({
            host: 'localhost',
            port: 8080,
            method: 'DELETE',
            path: `/api/employee/${id}`,
        }, async (res) => {
            let resJson = await getResponseData(res);

            if (res.statusCode != 200) reject(resJson.err_msg);

            resolve(resJson);
        })
        req.end();
    });
}


// get Employee
getEmployee('cda20135-83c4-41de-a263-b93095c0c2fe').then((data)=>{
    console.log('Employee: ', data);
}).catch(err=>{
    console.error('Error while fetching emp', err);
})


// register Employee
registerEmployee({
    "name": "Varsha Chalmeti",
    "company_id": 3
}).then((resJson)=>{
    if(resJson.ok) {
        console.log('Employee registered successfully!');
    } else {
        console.log(resJson.err_msg || 'Failed to register employee');
    }
}).catch(err=>{
    console.error('Error while registering employee', err);
})


// delete Employee
deleteEmployee('23382a99-56db-48ba-87b5-54f5f5ea05c6').then((resJson)=>{
    if(resJson.ok) {
        console.log('Employee deleted successfully!');
    } else {
        console.log(resJson.err_msg || 'Failed to delete employee');
    }
}).catch(err=>{
    console.error('Error while deleting employee', err);
})
