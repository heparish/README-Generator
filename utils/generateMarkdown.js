// generateReadme function populating the README.md
function generateReadme(answers) {
  return `
<h1 align="center">${answers.projectTitle}</h1>

## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Coding Style](#codingStyle)
- [Contributing](#contributing)
- [API's](#API)
- [Tests](#tests)
- [Questions](#questions)
## Installation
💾 ${answers.installation}
## Usage
💻 ${answers.usage}
## Coding Style
 ${answers.codingStyle}
## Contributing
👪 ${answers.contributing}
## API's
 ${answers.API}
## Tests
✏️ ${answers.tests}
## Questions
✋ ${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />
_This README was generated with ❤️ by [README-generator](https://github.com/heparish/README-generator) 🔥🔥🔥_
  `;
}

module.exports = generateReadme;