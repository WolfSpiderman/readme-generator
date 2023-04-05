
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
        type: "input",
        when: answers => {
            return answers.contents.includes("Contributions");
        }
    },
    {
        name: "tests",
        message: "How can others run tests on your code?",
        type: "input",
        when: answers => {
            return answers.contents.includes("Tests");
        }
    },
    {
        name: "license",
        message: "What License is your project using?",
        type: "list",
        choices: ["MIT", "Apashe 2.0", "BSD 3-Clause", "Other"],
        when: answers => {
            return answers.contents.includes("License");
        }
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {if (err) {console.log(err)}});
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt(questions).then(data => {
    const markdownContent = generateMarkdown(data);
    const readmeTitle = `${data.title}-README.md`;
    console.log("Generating README...");
    console.log("\n ---------------------------------\n");
    console.log("Please note that the newly generated readme has been given a prefix of the project title for easy identification.\n It is recommended you rename the file once moved to its desired destination.\n It is also recommended checking for errors due to human error: \n You forgetting to use complete sentences, forgetting punctuation, or forgetting how to spell. \nBlame me for any errors and I'll be reporting you to Bear Evil™ Corp.");
    console.log(data);
    writeToFile(readmeTitle, markdownContent);
});