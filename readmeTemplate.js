

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
    screenshot
  } = userResponses;

  // Create GitHub and Email links
  const githubLink = `[GitHub Profile](https://github.com/${github})`;
  const emailLink = `[Email](mailto:${email})`;

  // Generate license badge based on the selected license
  let licenseBadge = '';

  switch (license) {
    case 'Apache License 2.0':
      licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'MIT License':
      licenseBadge = '![License](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'BSD 2-Clause "Simplified License"':
      licenseBadge = '![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      licenseBadge = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      break;
    case 'Boost Software License 1.0':
      licenseBadge = '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = '![License](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)';
      break;
    case 'Eclipse Public License 2.0':
      licenseBadge = '![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)';
      break;
    case 'GNU Affero General Public License v3.0':
      licenseBadge = '![License](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)';
      break;
    case 'GNU Lesser General Public License v2.1':
      licenseBadge = '![License](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)';
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = '![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
      break;
    case 'The Unlicense':
      licenseBadge = '![License](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      break;
    default:
      licenseBadge = '';
  }

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

  This project is licensed under the ${licenseBadge} license.

  ## Links

  ${links}

  ## Screenshot

  ${screenshot}

  ## Contact

  - GitHub: ${githubLink}
  - Email: ${emailLink}
  `;
};

module.exports = generateReadme;
