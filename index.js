const inquirer = require("inquirer");
const fs = require("fs");

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
        message: "Where can questions or issues be directed?",
        name: "questions"
    }
];

function checkError(error) {
    if (error) {
        console.log(error);
        throw error;
    }
    else {
        console.log("success");
    }
}

// function to write README file
function writeToFile(fileName, data) {
    readmeString = "";
    readmeString += "# " + data.title + "\n\n";
    readmeString += "## Description\n" + data.description + "\n\n";
    readmeString += "## Installation\n" + data.installation + "\n\n";
    readmeString += "## Usage\n" + data.usage + "\n\n";
    readmeString += "## Contributing\n" + data.contributions + "\n\n";
    readmeString += "## License\n" + data.license + "\n\n";
    readmeString += "## Tests\n" + data.test + "\n\n";
    readmeString += "## Issues and Questions\n" + data.questions;

    fs.writeFile(fileName, readmeString, error => checkError(error));
 
    // fs.writeFile(fileName, JSON.stringify(data) + "\n", function(error) {
    //     if (error) {
    //         return console.log(error);
    //     }
    // })
    // console.log("success");
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers)
            try {
                writeToFile("new-readme.md", answers);
            }
            catch (error) {
                console.log(error + "error")
            }
        });
}

// function call to initialize program
init();

