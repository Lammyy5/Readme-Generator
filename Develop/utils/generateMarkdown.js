// TODO: Create a function that returns a license badge based on which license is passed in

const { link } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "MIT") {
    return `![Github license](https://img.shields.io/badge/LICENSE-MIT-red)`;
  }
  return "";
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === "MIT") {
    
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installations](#Installations)

  * [Usage](#Usage)

  * [Contributers](#Contributers)

  * [Tests](#Tests)

  ## Installation

  ${data.installation}

  ##Usage

  ${data.usage}

  ## License 

  ${data.license}

  ## Contributers  

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.usage}

  Please send your questions [here](https://mailto:${data.email}) or visit [github](https://github.com/${data.github}).

  ## License 

  license is under ${data.license}

  



`;
}

module.exports = generateMarkdown;
