// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gm = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project title?',
        default: 'Project Title'
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
        default: 'Project Description'
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
async function init() {
    const answers = await inquirer.prompt(questions);
    writeToFile("README.md", gm(answers));
}

// Function call to initialize app
init();
