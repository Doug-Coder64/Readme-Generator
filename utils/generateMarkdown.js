
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  
  const getTOC = () => {
    let toc = `## Table of Contents`;
    
    toc += "\n * [Description](#Description)"
    
    //If statements that add to table of Contents if that section has been answered
    if(data.Installation) toc += '\n* [Installation](#Installation)';
    if(data.usage) toc += '\n* [Usage](#Usage)';
    if(data.contributing) toc += '\n* [Contributing](#Contributing)';
    if(data.tests) toc += '\n* [Tests](#Tests)';

    return toc;
  }

  /* Verification functions that each section has value before adding it to Markdown */
  const installation = () => {
    if(data.installation) return `## Installation \n ${data.installation}`;
    return '';
  }

  const usage = () => {
    if(data.usage) return `## Usage \n ${data.usage}`;
    return '';
  };

  const contributing = () => {
    if(data.contributing) return `## Contributing \n ${data.contributing}`;
    return '';
  }

  const tests = () => {
    if(data.tests) return `## Tests \n ${data.tests}`;
    return '';
  }
  /* End of Verification functions */

  let markdown = 
  `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ${getTOC()}
  
  ${installation()}

  ${usage()}

  ${contributing()}

  ${tests()}
  `;

  return markdown;
}

module.exports = generateMarkdown;
