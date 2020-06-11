
-- DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE IF NOT EXISTS employeeDB;
USE employeeDB;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT
, deptName VARCHAR(30) NOT NULL
, PRIMARY KEY (id)
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT
,title VARCHAR(30) 
,salary DECIMAL (10,2)
,department_id INT 
, PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT
, first_name VARCHAR(30) 
, last_name VARCHAR(30)
, role_id INT 
, manager_id INT NULL 
, PRIMARY KEY (id)
);

SELECT * FROM employee;

SELECT * FROM roles;

SELECT * FROM department;

SELECT title, salary, deptName FROM roles INNER JOIN department ON roles.department_id = department.id ;
SELECT first_name, last_name, title, deptName FROM employee INNER JOIN roles ON employee.id = roles.id ;

-- first, last, role, dept table
SELECT first_name, last_name, title, deptName 
FROM roles 
JOIN department ON roles.department_id = department.id 
JOIN employee ON employee.id = roles.id








