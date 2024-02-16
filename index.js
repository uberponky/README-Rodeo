import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import generateMarkdown from './utils/generateMarkdown.js'

// Replicate the functionality of __dirname for ES6 Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(__dirname,fileName), data, function (err) {
    if (err) throw err;
    console.log('Saved!')
  })
}

// function to initialize program
async function init() {
  const userInput = await inquirer.prompt([
    {
      name: "username",
      message: "Enter your GitHub username:",
      type: "input",
    },
    {
      name: "email",
      message: "Enter your GitHub email:",
      type: "input",
    },
    {
      name: "url",
      message: "Enter your GitHub account URL:",
      type: "input",
    },
    {
      name: "title",
      message: "Enter your project title:",
      type: "input",
    },
    {
      name: "description",
      message: "Enter your project description:",
      type: "input",
    },
    {
      name: "installation",
      message: "Enter your installation instructions:",
      type: "input",
    },
    {
      name: "usage",
      message: "Enter your usage instructions:",
      type: "input",
    },
    {
      name: "contribution",
      message: "Enter your contribution instructions:",
      type: "input",
    },
    {
      name: "test",
      message: "Enter the command that should be used to run tests:",
      type: "input",
    },
    {
      name: "license",
      message: "Select a license",
      type: "list",
      choices: ['MIT', "Apache 2.0", "Boost 1.0", "BSD 3-Clause", "BSD 2-Clause"]
    }
  ])

  const markdown = generateMarkdown(userInput)
  writeToFile('README.md', markdown)
}

// function call to initialize program
init();
