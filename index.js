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
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for this project?',
        choices: ['Apache 2.0','BSD 3-Clause','Eclipse Public License 1.0', 
                  'GNU GPL v3', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 
                  'BM Public License Version 1.0', 'MIT', 'Mozilla Public License 2.0']

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give instruction on how to install the project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give instruction on how to use this project, Tip: Provide Examples!'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Give instruction on how others can contribute to this project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Give instruction on how others can run tests on this project'
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
