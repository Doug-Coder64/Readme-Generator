// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project title?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
    
        console.log("Success!");
    
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", data);
    });
}

// Function call to initialize app
init();
