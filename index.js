// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "confirm",
    name: "start",
    message:
      "This will generate a README file after you enter some information",
  },
   {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username?",
  },
  {
    type: "input",
    name: "linkedin",
    message: "Enter your LinkedIn URL?",
  },
  {
    type: "input",
    name: "title",
    message: "Application Title:",
  },
  {
    type: "input",
    name: "description",
    message: "Description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instuctions:",
  },
  {
    type: "input",
    name: "credits",
    message: "Credits:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributing:",
  },
  {
    type: "input",
    name: "tests",
    message: "Test Instructions:",
  },
  {
    type: "list",
    name: "license",
    choices: ["MIT", "BSD2", "BSD3", "Apache 2.0"],
    message: "Select your license.",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) new Error(err);
    console.log("Perfect");
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("test.md", generateMarkdown(answers));
    })
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
