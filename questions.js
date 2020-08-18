// array of questions for user
const questions = [
    {
        type: "list",
        message: "Choose a filename to write to.",
        name: "fileName",
        choices: [ "dev-test.md", "README.md"]
    },
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
        message: "What is your GitHub username, to where questions can be directed?",
        name: "username"
    },
    {
        message: "What is your email address to which questions can be directed?",
        name: "email"
    }
];

module.exports = {
    questions
};