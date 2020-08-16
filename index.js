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
        message: "What is your GitHub username, where questions can be directed to?",
        name: "username"
    },
    {
        message: "What is your email address to which questions can be directed?",
        name: "email"
    }
];

function checkError(error) {
    if (error) {
        console.log(error + " was the error");
        throw error;
    }
    else {
        console.log("success");
    }
}

// function to write README file
function writeToFile(fileName, data) {
    readmeString = ""
    + "# " + data.title + "\n\n"
    + "## Table of Contents\n"
    + `\n\n1.<a href="#description>Description</a>\n2.${data.installation}\n3.${data.usage}\n4.${data.contributions}\n`
    + `5.${data.license}\n6.${data.test}\n7.${data.email}`
    + "<h3 id='description'>Description</h3>\n" + data.description + "\n\n"
    + "### Installation\n" + data.installation + "\n\n"
    + "### Usage\n" + data.usage + "\n\n"
    + "### Contributing\n" + data.contributions + "\n\n"
    + "### License\n" + data.license + "\n\n"
    + "### Tests\n" + data.test + "\n\n"
    + "### Issues and Questions\n"
    + `Issues and questions can be directed to ${data.email}. `
    + `The author's GitHub profile may be found at https://github.com/${data.username}.`;

    // email@outlook.com
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
                writeToFile("README.md", answers);
            }
            catch (error) {
                console.log(error + "error was caught")
            }
        });
}

// function call to initialize program
init();

