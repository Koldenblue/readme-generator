const inquirer = require("inquirer");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

inquirer.prompt([
    {
        message: "What is the project title?",
        name: "title"
    },
    {
        message: "What is the project description?",
        name: "description"
    },
    {
        message: "What are the installation instructions?",
        name: "installation"
    },
    {
        message: "How do you use the program / what is the usage?",
        name: "usage"
    },
    {
        message: "How can contributions be made to the program?",
        name: "contributions"
    },
    {
        type: "list",
        message: "What is the program license? These are sorted from most to least permissive.",
        name: "license",
        choices: ["MIT", "Apache License 2.0", "Mozilla Public License",
            "ISC", "GNU LGPLv3", "GNU GPLv3", "GNU AGPLv3"]
    },
    {
        message: "How can the program be tested?",
        name: "test"
    },
    {
        message: "How can issues be reported?",
        name: "issues"
    }

]).then(answers => {
    console.log(answers)
})