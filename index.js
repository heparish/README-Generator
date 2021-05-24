// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generator = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of this project?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the usage of this project: ",
        },
        {
            type: "input",
            name: "codingStyle",
            message: "Write what coding style you used ex.'standard'?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "API",
            message: "Were any API's used in this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ];

async function init() {
    try{
        const answers = await inquirer.prompt(questions);
        // console.log(answers);
        //Pass in user answers to the generate markdown javascript:
        let generate = generator(answers);
        
        //Write the README.md file using the generate data and error catching.
        fs.writeFile('README.md', generate, err => {
            if (err) {
              console.error(err)
              return
            }
        });
    } catch(error){
        console.log(error);
    }
};

// Function call to initialize app
init();