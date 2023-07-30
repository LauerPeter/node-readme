//fs var
const fs = require("fs");

//inquirer 
const inquirer = require("inquirer");

//grabs the readme template

const readmeTemplate = require("./readmeTemplate")
//prompt questions

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What will be the name/title of your project?',
      name: 'projectName',
    },
  
    {
      type: 'input',
      message: 'Please provide a description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message:'What is the usage of this application?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What are the contribution guidlines for this application?',
      name: 'contribution',
    },
    {
      type: 'input',
      message:'Are there any installation instructions for this application?',
      name: 'userInstructions'
    },
    {
      type: 'input',
      message: 'Are there any test instructions for this application?',
      name: 'testInstruction',
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please enter your email linked to your GitHub repo',
      name: 'email',
    },
    {
      type: 'list',
      message: 'Please select a license for your project',
      name: 'license',
      //list of licenses from Github
      choices: 
      ['Apache License 2.0', 
      'GNU General Public License v3.0', 
      'MIT License', 
      'BSD 2-Clause "Simplified License"', 
      'BSD 3-Clause "New" or "Revised" License', 
      'Boost SoftWare License 1.0', 
      'Creative Commons Zero v1.0 Universal', 
      'Eclipse Public License 2.0', 
      'GNU Affero General Public License v3.0', 
      'GNU Lesser General Public License v2.1', 
      'Mozzila Public License 2.0', 
      'The Unlicense'],
    },
  ])

  