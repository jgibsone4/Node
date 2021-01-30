// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![GitHub all releases](https://img.shields.io/github/downloads/jgibsone4/jgibsone4.github.io/total?style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/jgibsone4/jgibsone4.github.io?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/jgibsone4/jgibsone4.github.io?style=social)
![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blue&style=flat-square)
  ---
  # Description
  ${data.description}
---
  ## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license) 
* [Questions](#questions)

---
## Installation
${data.installation}
---
## Usage
${data.usage}
---
## Credits
${data.credits}
---
## Contributing
${data.contributing}
---
## Tests
${data.tests}

---
## License
Copyright (c) 2021 ${data.name}  
Licensed under the ${data.license}
---
## Questions
Reach me on [GitHub](https://www.github.com/${data.github})
Reach me on [LinkedIn](https://www.linkedin.com/${data.linkedin})  
Reach me via email at <${data.email}>
`;
}

module.exports = generateMarkdown;
