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
}

// function to initialize program
function init() {
  generateMarkdown('test')
}

// function call to initialize program
init();
