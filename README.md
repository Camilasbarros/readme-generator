# readme-generator

## Description

The README Generator is a command-line application that allows developers to easily create a professional README.md file for their open-source projects hosted on GitHub. Having a high-quality README is crucial for providing essential information about your project, making it more accessible to other developers, and increasing the likelihood of contributions.
This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. Check out the [ExampleREADME.md](./ExampleREADME.md) in this repo as an example.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Methodology](#methodology)
- [License](#license)
- [Questions](#questions)

## Installation

To install the README Generator Project, follow these simple steps:

1. Clone this repository to your local machine:

- git clone https://github.com/camilasbarros/readme-generator.git

2. Navigate to the project directory:

- cd readme-generator

3. Install the necessary dependencies using npm:

- npm install

## Usage

![Gif demo of README-generator](https://youtu.be/zARxuwJtT14)

To generate a professional README.md file for your project, run the following command in your terminal:

- node index.js

When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your project and your GitHub/email.

## Methodology

The application utilizes modularization by separating the GitHub API call and generation of the markdown into separate modules: `api.js` and `generateMarkdown.js`, respectively, inside the utils folder.

The application also utilizes, as much as possible, syntax and paradigms introduced in ES6 and beyond, including:

- Arrow functions,
- `const`, `let`,
- Template literals, and
- `async/await` to handle inquirer, axios, and fs.writeFile promises.

## License

This project is licensed under the MIT license. ![License Badge](https://img.shields.io/badge/License-MIT-brightgreen)

## Questions

For any questions, please contact me with the information below:

- GitHub: [Camilasbarros](https://github.com/Camilasbarros)
- Email: cmillabarros.cb@gmail.com
