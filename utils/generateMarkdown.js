
// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //simple check to see if a license is selected
  if(!license) return '';
  
  let licenseName = license.split(' ');
  let licenseLink = ``;
  let badgeName = ``;
  
  for(i = 0; i < licenseName.length; i++) {
    if(i+1 === licenseName.length) {
      licenseLink += licenseName[i];
      badgeName += licenseName[i];
    } else {
      licenseLink += `${licenseName[i]}-`;
       badgeName += `${licenseName[i]}%20`;
    }
  }

  return `[![License](https://img.shields.io/badge/License-${badgeName}-blue.svg)](https://opensource.org/licenses/${licenseLink})`;
}

//function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

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

  const license = () => {
    if(license) return `## License \n This Project is covered under the ${data.license}`;
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

  ${license()}

  ${questions()}
  `;

  return markdown;
}

module.exports = generateMarkdown;
