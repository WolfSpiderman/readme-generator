function renderLicenseBadge(license) {
    switch(license) {
        case "MIT": return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ";
        case "Apashe 2.0": return "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "BSD 3-Clause": return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        default: return "";
    }
}

function renderLicenseLink(license) {
    switch(license) {
        case "MIT": return "https://opensource.org/licenses/MIT";
        case "Apashe 2.0": return "https://opensource.org/licenses/Apache-2.0";
        case "BSD 3-Clause": return "https://opensource.org/licenses/BSD-3-Clause";
        default: return "";
    }
}

function renderLicenseSection(license) {
    return `Licensed under the [${license} License](${renderLicenseLink(license)})`;
}

function generateMarkdown(data) {

  var markdown = `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.what} ${data.why} ${data.what2} ${data.what3} ${data.descrEnd}
  
## Table of Contents
  
[Installation](#Installation)
  
[Usage](#Usage)
\n`;

if (data.contents.includes("License")) {
    markdown += `[License](#License)
    \n`;
} if (data.contents.includes("Contributions")) {
    markdown += `[Contributions](#Contributions)
    \n`;
} if (data.contents.includes("Tests")) {
    markdown += `[Tests](#Tests)
    \n`;
}

markdown += `[Credits](#Credits)

## Installation

${data.install}

## Usage

${data.usage}
\n`;

if (data.contents.includes("License")) {
    markdown += `## License

${renderLicenseSection(data.license)}
\n`
} if (data.contents.includes("Contributions")) {
    markdown += `## Contributions
    
${data.contribute}
\n`;
} if (data.contents.includes("Tests")) {
    markdown += `## Tests
    
${data.tests}
\n`;
}

markdown += `## Credits

## Questions

[![GitHub](https://img.shields.io/badge/GitHub-${data.gitname}-orange)](https://github.com/${data.gitname})

Contact me with any questions:
[Email](${data.email})`

return markdown;
}

module.exports = generateMarkdown;