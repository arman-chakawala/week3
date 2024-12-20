// Required modules
const Student = require('./StudentInfo');
const Person = require('./Person');
const os = require("os");
const util = require('util');

// Function to display employee information
function EmployeeInfo(name, Salary) {
    console.log(`Welcome ${name}, Your monthly Salary is ${Salary}`);
}

// Function to display employee skills
const EmpSkills = (skills) => {
    console.log(`Expert in ${skills}`);
};

// Program starts here
console.log("This is my first program");

// Employee details
const EmpName = "John";
const EmpSalary = 50000;

// Calling the EmployeeInfo function
EmployeeInfo(EmpName, EmpSalary);

// Calling the EmpSkills function
EmpSkills("Java");

// Using the Student module
const student = require('./StudentInfo');

// Displaying student information
console.log(`Student Name: ${student.getName()}`);
console.log(`Campus Location: ${student.Location()}`);
console.log(`Date of Birth: ${student.dob}`); // Displaying student date of birth
console.log(`Student Grade: ${student.Studentgrade(55)}`); // Calling Studentgrade function

// Using the Person module
const person1 = new Person("Jim", 25, "myemail@gmail.com");
console.log("Using Person Module:", person1.getPersonInfo());

// Exercise 4 starts here
console.log(`Temporary Directory: ${os.tmpdir()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`OS: ${os.platform()} Release: ${os.release()}`);
console.log(`Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`);
console.log(`User Info: ${util.inspect(os.userInfo())}`);
console.log(`Total Memory: ${(os.totalmem() / 1_000_000_000).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / 1_000_000_000).toFixed(2)} GB`);
console.log(`CPU Information: ${util.inspect(os.cpus(), { depth: null })}`);
console.log(`Network Interfaces: ${util.inspect(os.networkInterfaces(), { depth: null })}`);

// Program end message
console.log("Program end");
