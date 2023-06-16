var inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'README.md';

inquirer
    .prompt([
        {
            type: "input",
            name: "titleQuestion",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "descriptionQuestion",
            message: "What is the description of your project?"
        },
        {
            type: "input",
            name: "instalationQuestion",
            message: "What is the installation instructions of your project?"
        },
        {
            type: "input",
            name: "usageInformationQuestion",
            message: "What is the usage information for your project?"
        },
        {
            type: "list",
            name: "licenseQuestion",
            message: "Choose a license for your project",
            choices: ['MIT', 'APACHE 2.0', 'GNU General Public Lcense 3.0', 'Boost Software 1.0']
        },
        {
            type: "input",
            name: "contributionGuidelinesQuestion",
            message: "What is the contribution guidelines for your project?"
        },
        {
            type: "input",
            name: "testInstructionsQuestion",
            message: "What are the test instuctions for your project?"
        },
        {
            type: "input",
            name: "userNameQuestion",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "emailQuestion",
            message: "What is your email?"
        },
    ])

    .then((promptData) => {
        console.log(promptData);
        writeToReadMe(fileName, promptData);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("There is an error");
        }
    });

function writeToReadMe(fileName, answers) {

    var title = answers.titleQuestion;
    var description = answers.descriptionQuestion;
    var installation = answers.installationQuestion;
    var usage = answers.usageInformationQuestion;
    var license = answers.licenseQuestion;
    var contribution = answers.contributionGuidelinesQuestion;
    var testInstructions = answers.testInstructionsQuestion;
    var userName = answers.userNameQuestion;
    var email = answers.emailQuestion;

    var readmeContent = `
    ${badge}
    # ${title}
    
    ## Description
    
    ${description}

    ## Table of Contents

   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contribution](#contribution)
   * [Test](#test)
   * [Questions](#questions) 
    
    ## Installation
    
    ${installation}
    
    ## Usage Information
    
    ${usage}

    ## License

    ${license}
    
    ## Contribution Guidelines
    
    ${contribution}
    
    ## Test Instructions
    
    ${testInstructions}

    ## Questions:

   If you have any questions, feel free to reach out: 
   GitHub: [GitHub](https://github.com/${userName}) 
   Email: ${email}
    `;

    fs.writeFile(fileName, readmeContent, err => {
        err ? console.error(err) : console.log('readme file created!')

    });
}