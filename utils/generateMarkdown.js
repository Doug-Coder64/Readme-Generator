
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

//function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  console.log(indexOf(data.license));
  const getTOC = () => {
    let toc = `## Table of Contents`;
    
    toc += "\n * [Description](#Description)"
    
    //If statements that add to table of Contents if that section has been answered
    if(data.installation) toc += '\n* [Installation](#Installation)';
    if(data.usage) toc += '\n* [Usage](#Usage)';
    if(data.contributing) toc += '\n* [Contributing](#Contributing)';
    if(data.tests) toc += '\n* [Tests](#Tests)';
  
    return toc += '\n';
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

  const questions = () => {
    let questions = `## Questions \n Questions about the project? \n Reach out:`;

    if(data.email) questions += ` \n * [${data.email}](mailto:${data.email})`;
    if(data.github) questions += ` \n * [${data.github}](https://github.com/${data.github})`;

    return questions;
  }
  /* End of Verification functions */

  let markdown = 
  `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ${getTOC()} \n 
  
${installation()}

  ${usage()}

  ${contributing()}

  ${tests()}

  ${questions()}
  `;

  return markdown;
}

module.exports = generateMarkdown;
