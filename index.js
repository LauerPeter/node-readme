

const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./readmeTemplate");

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
      message: 'What are the key features of your project?',
      name: 'features',
    },
    
    {
      type: 'input',
      message: 'How will your project be used?',
      name: 'usage',
    },
    
    {
      type: 'input',
      message: 'What technologies are used in your project?',
      name: 'technologies',
    },
    
    {
      type: 'input',
      message: 'Are there any installation instructions for this application?',
      name: 'installation',
    },
    
    {
      type: 'list',
      message: 'Please select a license for your project',
      name: 'license',
      choices: [
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified License"',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense',
      ],
    },
    
    {
      type: 'input',
      message: 'Provide links or resources related to your project (e.g., website, documentation)',
      name: 'links',
    },

    {
      type: 'input',
      message: 'Provide a link to a screenshot or demo (If you do not have a link you can manually add it to the generated file)',
      name: 'screenshot',
    },

    {
      type: 'input',
      message: 'How can others contact you for questions or contributions?',
      name: 'contact',
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
  ])
  .then((userResponses) => {
    const readmeTemplate = generateReadme(userResponses);
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