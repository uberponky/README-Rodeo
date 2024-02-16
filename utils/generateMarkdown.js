// function to generate markdown for README
export default function generateMarkdown(data) {
  let badge
  switch (data.license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break
    case 'Apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break
    case 'Boost 1.0':
      badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break
    case 'BSD 3-Clause':
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break
    case 'BSD 2-Clause':
      badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
      break
  }

  return (
`# ${data.title}
${badge}

## Description
${data.description}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contribution](#contribution)
[Tests](#tests)
[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.test}

## Questions
Please sent all questions to:
${data.username} - ${data.email}

[My GitHub profile](${data.url})

## License
${data.license}
`
)
}