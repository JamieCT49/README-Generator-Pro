// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
      Licensed under the ${license} license.`;
  }
  return "";
}
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contibutions](#Contributions)
* [Testing](#Testing)
* [Questions](#Questions)
## Installation
${data.Installation}
## Usage
${data.Usage}
## Contributions
${data.Contribution}
## Testing
${data.test}
## Questions 
My Github is at (https://www.github.com/${data.github})


If you have any questions please contact me at ${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
