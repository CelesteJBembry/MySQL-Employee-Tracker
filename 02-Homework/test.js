//ADD 
//departments, roles, employees
// function add() {
//     inquirer
//     .prompt([
//       {
//         name: "justAdd",
//         type: "list",
//         message: "What would you like to add?",
//         choices: ["Employee", "Role", "Department"]
//       },
//       {
//         name: "addInfo",
//         type: "input",
//         message: "Please insert the new information"
//       },
      
//     ])
//     .then(function(answer) {
      
//       if(answer === "Employee"){
//       connection.query(
//         "INSERT INTO employees SET ?",
//         {
//           first_name: answer.addInfo,
//           last_name: answer.category,
//           //@@this needs fixed to take both names
//         })}

//         else if(answer === "Role"){
//         connection.query(
//           "INSERT INTO roles SET ?",
//           {
//             title: answer.addInfo,
//           })}

//         else if(answer === "Department"){
//         connection.query(
//             "INSERT INTO depts SET ?",
//             {
//             deptname: answer.addInfo,
//             })}

//         else  (err) => {
//           if (err) throw err;
//           console.log("Successfully added!");
//           start();
//         }});
//     };



   // --------------
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

           // --------------

function view() {
inquirer
.prompt([
    {
        name: "choice",
        type: "rawlist",
        choices: function showItems() {
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
                                }})}}])};
        start();