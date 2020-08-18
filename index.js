const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown.js")

// array of questions for user
const questions = [
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
        message: "What is your GitHub username, where questions can be directed to?",
        name: "username"
    },
    {
        message: "What is your email address to which questions can be directed?",
        name: "email"
    }
];

// this function checkError is redundant with the catch function below
// because the catch will already catch any errors from the writeToFile

function checkError(error) {
    // throw new Error ("OH NO"); // will not be caught
    if (error) {
        console.log(error + " was the error");
    }
    else {
        console.log("success");
    }
}


// function to write README file
function writeToFile(fileName, data) {

    let readmeString = markdown.generateMarkdown(data);
    // email@outlook.com
    fs.writeFile(fileName, readmeString, error => checkError(error));
    // throw new Error ("OH NO");  // will be caught
}


// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        try {
            writeToFile("README.md", answers);
        }
        catch (error) {
            // checkError(error) => this function is redundant with the catch!
            console.log(error + " error was caught")
        }
    });
}

// function call to initialize program
init();





    // Alternate way of error handling
    // fs.writeFile(fileName, JSON.stringify(data) + "\n", function(error) {
    //     if (error) {
    //         return console.log(error);
    //     }
    // })
    // console.log("success");