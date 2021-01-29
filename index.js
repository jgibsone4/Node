// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');           
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
      type: 'confirm',
      name: 'start',
      message: 'This will generate a README file after you enter some information',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username?',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Application Title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation instuctions:',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Credits:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Contributing:',
      },
      {
        type: 'input',
        name: 'code of conduct',
        message: 'Code of Conduct:',
      },
      {
        type: 'list',
        name: 'license',
        Choices: ["MIT", "BSD2", "BSD3", "Apache 2.0"],
        message: "Select your license."
    }
];

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) new Error(err);
      console.log("README successfully created!");
    });
}

  function init() {
    inquirer.prompt(promptUser)
      .then(answers => {
        writeToFile("test.md", generateMarkdown(answers))
      })
      .catch(err => console.log(err));
  }
  

init();
