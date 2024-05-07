// packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project.",
    },
    {
        type: "input",
        name: "name",
        message: "Please enter your name.",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the project.",
    },
    {
        type: "input",
        name: "Installation",
        message: "Please describe the Installation process.",
    },
    {
        type: "input",
        name: "Usage",
        message: "Please enter usage information.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select license.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "Contribution",
        message: "Please list contributions.",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Please list tests you could do.",
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your github.",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email.",
    },
];

// Creates a function to write the README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// Initialize app and put it into the sample folder
function init() {
    inquirer.prompt(questions).then((responses) =>{
        console.log("Creating README.md File...");
        writeToFile("./sample/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
