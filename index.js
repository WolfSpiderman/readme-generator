// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the name of this project/repository?",
        type: "input"
    },
    {
        name: "what",
        message: "What was your motivation to create this?",
        type: "input"
    },
    {
        name: "why",
        message: "Why did you build this project? (Note, the answer is not: because it was a homework assignment.)",
        type: "input"
    },
    {
        name: "what2",
        message: "What problem does this project solve?",
        type: "input"
    },
    {
        name: "what3",
        message: "What did you learn while working on this project?",
        type: "input"
    },
    {
        name: "descrEnd",
        message: "Is there anything else you'd like to add to the description of your readme? Just press enter/return if nothing else to add.",
        type: "input"
    },
    {
        name: "contents",
        message: "Are you using any of the following sections in your readme?",
        type: "checkbox",
        choices: ["License", "Contributions", "Tests"] 
    },
    {
        name: "install",
        message: "How can your application be installed?",
        type: "input"
    },
    {
        name: "usage",
        message: "Walk through the steps of using your application, please.",
        type: "input"
    },
    {
        name: "contribute",
        message: "How can others contribute to this project?",
        type: "input"
    },
    {
        name: "tests",
        message: "How can others run tests on your code?",
        type: "input"
    },
    {
        name: "license",
        message: "What License is your project using?",
        type: "checkbox"
    },
    {
        name: "gitname",
        message: "What is your GitHub username?",
        type: "input"
    },
    {
        name: "email",
        message: "What is your email address?",
        type: "input"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();