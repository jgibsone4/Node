const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

const promptUser = () =>
  inquirer.prompt([
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
      },


    
  ]);

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">

 

const init = () => {
  promptUser().then((answers) => {
    try {
      const html = generateHTML(answers);
      fs.writeFileSync('index.html', html);
      console.log('Successfully wrote to index.html');
    } catch (error) {
      console.log(error);
    }
  });
};

init();
