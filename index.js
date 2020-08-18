const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown.js");
const questions = require("./questions");

// this function checkError is redundant with the catch function below
// because the catch will already catch any errors from the writeToFile

function checkError(error) {
    // throw new Error ("OH NO"); 
    if (error) {
        console.log(error + " was the writeFile error");
    }
    else {
        console.log("success");
    }
}


// function to write README file
function writeToFile(fileName, data) {

    let readmeString = markdown.generateMarkdown(data);
    try {
        fs.writeFileSync(fileName, readmeString, function(error) {
            checkError(error)
        })
    }
    catch (error) {
        console.log(error + " error was caught")
    }

}


// function to initialize program
function init() {
    inquirer.prompt(questions.questions).then(answers => {
        console.log(answers)
        try {
            writeToFile(answers.fileName, answers);
        }
        // I think the reason this catch won't catch the error from checkError is because of the asynchronous nature of writeFile.
        // using writeFileSync won't call checkError, because there is no need for a callback.
        // using the async writeFile will produce the thrown error, but it won't be caught here because this code
        // runs BEFORE the error is thrown - asychnchronous!!!! In other words, the catch isn't part of the promise!!
        catch (error) {
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