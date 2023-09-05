import fs from "fs";
import path from "path";
import inquirer from "inquirer";

// Function to generate README content based on user input
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Methodology](#methodology)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Methodology
${data.methodology}

## License
This project is licensed under the ${data.license} license. ![License Badge](https://img.shields.io/badge/License-${data.license}-brightgreen)

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

// Array of questions for the user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use the project?",
  },
  {
    type: "input",
    name: "methodology",
    message: "What is the development methodology adopted by the project?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "Other"],
  },
  {
    type: "input",
    name: "contribution",
    message: "How can others contribute to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How to run tests for the project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Function to write the README to the README.md file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Function to initialize the program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
    console.log("README.md generated successfully!");
  });
}

// Call the function to initialize the program
init();
