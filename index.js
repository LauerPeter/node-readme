//fs var
const fs = require("fs");

//inquirer 
const inquirer = require("inquirer");

//grabs the readme template

const generateReadme = require("./readmeTemplate");

//prompt questions

inquirer
  .prompt([
    {
      ///PROJECTNAME
      type: 'input',
      message: 'What will be the name/title of your project?',
      name: 'projectName',
    },
  
    {
      ///DESCRIPTION
      type: 'input',
      message: 'Please provide a description of your project.',
      name: 'description',
    },
    {
      ///USAGE
      type: 'input',
      message:'What is the usage of this application?',
      name: 'usage',
    },
    {
      ///CONTRIBUTION
      type: 'input',
      message: 'What are the contribution guidlines for this application?',
      name: 'contribution',
    },
    {
      ///INSTALLATION
      type: 'input',
      message:'Are there any installation instructions for this application?',
      name: 'userInstructions'
    },
    {
      ///TEST INSCRUCTIONS
      type: 'input',
      message: 'Are there any test instructions for this application?',
      name: 'testInstruction',
    },
    {
      ///GITHUB USERNAME
      type: 'input',
      message: 'Please enter your GitHub username',
      name: 'github',
    },
    {
      ///EMAIL
      type: 'input',
      message: 'Please enter your email linked to your GitHub repo',
      name: 'email',
    },
    {
      ///LICENSES - WILL TRY AND IMPLEMENT THE ICON, NOT SURE HOW TO DO THAT
      type: 'list',
      message: 'Please select a license for your project',
      name: 'license',
      //list of licenses I coppied from Github
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

  .then((userResponses) => {
    
    const readmeTemplate = generateReadme(userResponses);
    ///creates a reamme file from the template on the other file
    fs.writeFile("README.md", readmeTemplate, (err) => {
      if (err) {
        console.error("Error writing README file:", err);
      } else {
        console.log("README file successfully created!");
      }
    });
  })
  .catch((error) => {
    console.error("An unexpected error occurred:", error);
  });