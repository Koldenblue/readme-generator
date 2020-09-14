const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown.js");
const questions = require("./questions");
const path = require("path");


/** function to write README file */
function writeToFile(fileName, data) {
    let readmeString = markdown.generateMarkdown(data);

    fs.writeFile(path.join(__dirname, "/output", fileName), readmeString, function(error) {
        if (error && error.code === "ENOENT") {
            // if the output folder does not exist, create it and try writing again
            fs.mkdir(path.join(__dirname, "/output"), err => {
                if (err) throw err;
                fs.writeFile(path.join(__dirname, "/output", fileName), readmeString, err => {if (err) throw err});
            });
        }
    });
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
        return answers;
    }).then((answers) => {
        console.log(`Readme written to the output folder at ${__dirname}/output/${answers.fileName}`);
    });
}

// function call to initialize program
init();