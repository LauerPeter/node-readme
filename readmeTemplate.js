const generateReadme = (userResponses) => {
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

  return `


  ##  ${projectName}

  ## Description ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [GitHub](#github)
  - [Email](#email)
  
  ## Installation ${userInstructions}
  
  ## Usage ${usage}
  
  ## License ${license}
  
  ## Contributing ${contribution}
  
  ## Tests ${testInstruction}
  
  ## GitHub ${github}
  
  ## Email ${email}
  `;
};

module.exports = generateReadme;