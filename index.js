const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown.js");
const questions = require("./questions");


/** Error checking function for asynchronous callbacks */
function checkError(error) {
    if (error) {
        return console.log(error + " was the asynchronous callback error");
    }
    return console.log("success");
}


/** function to write README file */
function writeToFile(fileName, data) {
    let readmeString = markdown.generateMarkdown(data);
    fs.writeFile(fileName, readmeString, error => checkError(error));
}


/** function to initialize program */
function init() {
    inquirer.prompt(questions.questions).then(answers => {
        // The following try / catch block will only catch errors from generateMarkdown(), and not the callback checkError().
        // Due to the asynchronous nature of the callback, callback will run after the try / catch block is already complete.
        try {
            writeToFile(answers.fileName, answers);
        }
        catch (error) {
            console.log(error + " error was caught");
        }
    });
}

// function call to initialize program
init();