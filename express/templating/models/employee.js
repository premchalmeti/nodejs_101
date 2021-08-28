
employees = [
    {
      "id": "cda20135-83c4-41de-a263-b93095c0c2fe",
      "name": "Premkumar Chalmeti",
      "company_id": 2
    },
    {
      "id": "e1017ba8-2b2d-47a2-8696-178b26b26c10",
      "name": "Varsha Chalmeti",
      "company_id": 3
    },
    {
      "id": "7a877f11-b5ac-480d-8620-76b9d3fee410",
      "name": "Varsha Chalmeti",
      "company_id": 3
    },
    {
      "id": "708eeaad-2072-4906-ad1d-2285f06aa13f",
      "name": "Premkumar Chalmeti",
      "company_id": "3"
    }
];

function getEmployees() {
  return employees;
}

function getEmployee(id) {
  return employees.find(e => e.id == id);
}


module.exports = {getEmployees, getEmployee};
