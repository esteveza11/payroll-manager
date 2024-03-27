// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = []
  let keepGoing = true
  
  while (keepGoing) {
    const firstName = prompt("Type employee's first name.") //Get input
    const lastName = prompt("Type employee's last name.")
    let salary = prompt("Type employee's salary (please enter without commas).")

    if (isNaN(salary)) {
      salary = 0; //if Not a Number Salary is set to be zero
    } else {
      salary = parseFloat(salary); // Adds formatting
    }

    const currentEmployee = { //Gets employee from inputted information
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }

    employees.push(currentEmployee)

    const wantsToContinue = confirm("Click okay to add more employee data") //Prompting for possible more employee data or terminate

    keepGoing = wantsToContinue
  }

  console.log(employees)
  return employees
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0; //Starting pointer at 0
  employeesArray.forEach(employee => {
      totalSalary += employee.salary; //adding in the employees salary
  });
  
  const averageSalary = totalSalary / employeesArray.length; //averages the salaries
  
  const output = `Average Salary: $${averageSalary.toFixed(2)} | Number of Employees: ${employeesArray.length}`;
  
  console.log(output);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    const randomIndex = Math.floor(Math.random() * employeesArray.length); //generates random index within range
    const randomEmployee = employeesArray[randomIndex]; //gets a random employee
    const fullName = `${randomEmployee.firstName} ${randomEmployee.lastName}`; //puts both first and last together to log the full employees name
    
    console.log("Congratulations" + `${fullName}` + " our random lottery drawing winner!");
  }

/*
  ====================
  STARTER CODE
  Did not  modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
