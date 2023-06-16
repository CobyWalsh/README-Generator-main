var inquirer = require('inquirer');
const fs = require('fs');
const fileName= 'README.md';

inquirer
    .prompt([
    {
        type: "input",
        name: "titleQuestion",
        message: "What is the title of my project"
    },
    {
        type: "input",
        name: "descriptionQuestion",
        message: "What is the description of my project"
    },
    {
        type: "input",
        name: "instalationQuestion",
        message: "What is the installation instructions of my project"
    },
    {
        type: "input",
        name: "usageInformationQuestion",
        message: "What is the usage information for my project"
    }, 
    {
        type: "input",
        name: "contributionGuidelinesQuestion",
        message: "What is the contribution guidelines for my project"
    },
    {
        type: "input",
        name: "testInstructionsQuestion",
        message: "What are the test instuctions for my project"
    },
])
.then((promptData) => {
    console.log(promptData);
    writeToReadMe(fileName, promptData)
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
    var contribution = answers.contributionGuidelinesQuestion;
    var testInstructions = answers.testInstructionsQuestion;
    var testInstructions = answers.testInstructionsQuestion;
    
    var readmeContent = `
    # ${title}
    
    ## Description
    
    ${description}
    
    ## Installation
    
    ${installation}
    
    ## Usage Information
    
    ${usage}
    
    ## Contribution Guidelines
    
    ${contribution}
    
    ## Test Instructions
    
    ${testInstructions}
    `;
    fs.writeFile(fileName, readmeContent, err => {
        err ? console.error(err) : console.log('readme file created!')
    
});
}