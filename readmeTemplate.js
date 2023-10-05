

const generateReadme = (userResponses) => {
  const {
    projectName,
    description,
    features,
    usage,
    technologies,
    installation,
    license,
    github,
    email,
    links,
    screenshot,
    contact,
  } = userResponses;

  // Create GitHub and Email links
  const githubLink = `[GitHub Profile](https://github.com/${github})`;
  const emailLink = `[Email](mailto:${email})`;

  // Generate license badge based on the selected license
  const licenseBadge = `![License](https://img.shields.io/badge/License-${encodeURI(
    license
  )}-blue.svg)`;

  return `
  # ${projectName}

  ## Description

  ${description}

  ## Features

  ${features}

  ## Usage

  ${usage}

  ## Technologies

  ${technologies}

  ## Installation

  ${installation}

  ## License

  ${licenseBadge}

  This project is licensed under the [${license}](LICENSE.txt) license.

  ## Links

  ${links}

  ## Screenshot

  ![Screenshot](screenshot.png)

  ## Contact

  - GitHub: ${githubLink}
  - Email: ${emailLink}
  `;
};

module.exports = generateReadme;