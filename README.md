# Employee Management API

A RESTful API for managing employees built with Node.js, Express.js, and MySQL.

## Tech Stack

- Node.js
- Express.js
- MySQL
- express-validator

## Requirements

- Node.js v16+
- MySQL 8.0+

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/jaypogisubra/employee-management-api.git
cd employee-management-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create your .env file
```bash
cp .env.example .env
```
Then update `.env` with your MySQL credentials:
```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employee_db
```

### 4. Create the database and table
Run the SQL file in MySQL Workbench or terminal:
```bash
mysql -u root -p < database.sql
```

### 5. Start the server
```bash
npm run dev
```
Server runs on `http://localhost:3000`

---

## API Endpoints

### Create Employee
`POST /api/employees`
```json
{
  "name": "Jay Juson",
  "email": "Jay@example.com",
  "department": "Engineering",
  "position": "Backend Developer",
  "salary": 50000
}
```

### Get All Employees
`GET /api/employees`

With pagination and search:
`GET /api/employees?page=1&limit=10&search=Juan`

### Get Single Employee
`GET /api/employees/:id`

### Update Employee
`PUT /api/employees/:id`
```json
{
  "position": "Senior Backend Developer",
  "salary": 70000
}
```

### Delete Employee
`DELETE /api/employees/:id`

---

## Sample Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Jay Juson",
    "email": "Jay@example.com",
    "department": "Engineering",
    "position": "Backend Developer",
    "salary": 50000,
    "created_at": "2026-05-21T00:00:00.000Z"
  }
}
```

## Project Structure

```
employee-management-api/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── employee.controller.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── employeeValidator.js
│   ├── models/
│   │   └── employee.model.js
│   └── routes/
│       └── employee.routes.js
├── .env.example
├── .gitignore
├── Employee Management API.postman_collection.json
├── app.js
├── database.sql
└── package.json
```

---

## API Testing (Postman)

A pre-configured Postman collection is included in the root of the project to help you test all API endpoints immediately:

### How to Import:
1. Open **Postman**.
2. Click the **Import** button in the top-left corner.
3. Drag and drop the `Employee Management API.postman_collection.json` file from the project root.
4. Once imported, you will find the collection named **Employee Management API** with all 5 endpoints ready for execution.

