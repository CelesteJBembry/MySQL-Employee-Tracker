var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require('console.table');
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Love22**",
    database: "employeeDB"
  });

  // connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

//START
  function start() {
    inquirer
      .prompt({
        name: "AddViewUpdate",
        type: "list",
        message: "Would you like to Add, View, or Update employee information?",
        choices: ["Add", "View", "Update", "Exit"]
      })
  
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.AddViewUpdate === "Add") {
          add();
        }
        else if(answer.AddViewUpdate === "View") {
          view();
        } 
        else if(answer.AddViewUpdate === "Update") {
          update();
          } 
        else{
          connection.end();
        }
      });
  }
//ADD 
//departments, roles, employees
  function add() {
    inquirer
    .prompt([
      {
        name: "firstEmployee",
        type: "input",
        message: "What is their first name?"
      },
      {
        name: "lastEmployee",
        type: "input",
        message: "What is their last name?"
      },
      {
        name: "roleEmployee",
        type: "input",
        message: "What is their job title?"
      },
      {
        name: "deptEmployee",
        type: "input",
        message: "What is their department?"
      },
      
    ])
    .then(function(answer) {
      
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstEmployee,
          last_name: answer.lastEmployee,
          role_id: answer.roleEmployeeroleEmployee,
          //deptName: answer.deptEmployee,
        },

        function(err) {
            if (err) throw err;
          console.log("Successfully added!");
          start();
        });
    });
  };


// //VIEW 
// //departments, roles, employees
function view()  {
    connection.query (
        "SELECT first_name, last_name, title, deptName FROM roles JOIN department ON roles.department_id = department.id JOIN employee ON employee.id = roles.id",
         function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.table("first name: " + res[i].first_name,
                        "last name: " + res[i].last_name,
                        "role: " + res[i].title,
                        "dept Name: " + res[i].deptName,
                        "________________________________")
                        }})};
start();



//UPDATE
//roles   
function update() {
        inquirer
        .prompt([{
        name: "updateEmployeeFirst",
        type: "input",
        message: "What is the first name of the employee you would you like to update?"
        }, 
        {
        name: "updateRole",
        type: "input",
        message: "What is their new role?"
      }])
      .then(function(answer) {
        
      connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        
            var answer;
            for (var i = 0; i < res.length; i++) {
              if (res[i].first_name === (answer.updateEmployeeFirst)) {
                answer = res[i];
              }
            }
    
            if (answer.first_name) {
              connection.query(
                "UPDATE employees SET ? WHERE ?",
                [
                  {
                    first_name: (first_name)
                  },
                  {
                    role_id: upa.item_id
                  }
                ],
                function(error) {
                  if (error) throw error;
                    console.log("Employee Updated");
                }
              );
            }
            else {
              console.log("There was an error. Try again.");
            }
          });
      });
    };
  

  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
