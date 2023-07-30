const generateReadme = (userResponses) => {
  //const to set user responses
  const {
    projectName,
    description,
    usage,
    contribution,
    userInstructions,
    testInstruction,
    github,
    email,
    license,
  } = userResponses;


  ///cant comment below return for somereason.... read me template below
  return `



  ##  ${projectName}

  ## Description 
  
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [GitHub](#github)
  - [Email](#email)
  
  ## Installation:
  
  ${userInstructions}
  
  ## Usage:
  
  ${usage}
  
  ## License:
  
  ${license}
  
  ## Contributing:
  
  ${contribution}
  
  ## Tests:
  
  ${testInstruction}
  
  ## GitHub:
  
  ${github}
  
  ## Email:
  
  ${email}
  `;
};
////exports the template 
module.exports = generateReadme;