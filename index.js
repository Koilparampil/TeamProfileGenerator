const Employee  =require("./lib/Employee")
const Engineer  =require("./lib/Engineer")
const Intern  =require("./lib/Intern")
const Manager =require("./lib/Manager")
const {htmlbeginning, htmlEnding} =require('./src/TEMPLATE')
const inquirer = require('inquirer');
const fs = require('fs');

var wholeHTML=htmlbeginning
function EmployeeM(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What's the Manager's name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What's the Manager's ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What's the Manager's Email?`,
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: `What's the Manager's office number?`,
            },
            {
                type: 'list',
                name: 'Continue',
                message: `Which type of Team Member would you like to add?`,
                choices: ['Engineer', 'Intern', `I don't want to add any more team members`],
            },
        ])
        .then((data)=>{
            var manager =new Manager(data.name,data.id,data.email,data.officeNumber)
            managerHTML=`<section class="card">
<header>${manager.getName()}</header>
<p>ID: ${manager.getId()}</p>
<p>EMAIL:${manager.getEmail()}</p>
<p>Office Phone: ${manager.getOffice()}</p>
</section>`
            wholeHTML+=managerHTML
            switch(data.Continue){
                case 'Engineer':
                    EmployeeE()
                    break
                case 'Intern':
                    EmployeeI()
                    break
                case `I don't want to add any more team members`:
                    wholeHTML+=htmlEnding
                    fs.writeFile('./dist/index.html', wholeHTML, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                    );
                    break
            }
            
        })
}
function EmployeeE(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What's the Engineer's name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What's the Engineer's ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What's the Engineer's Email?`,
            },
            {
                type: 'input',
                name: 'gitHubUser',
                message: `What's the Engineer's GitHub Username?`,
            },
            {
                type: 'list',
                name: 'Continue',
                message: `Which type of Team Member would you like to add?`,
                choices: ['Engineer', 'Intern', `I don't want to add any more team members`],
            },
        ])
        .then((data)=>{
            var engineer =new Engineer(data.name,data.id,data.email,data.gitHubUser)
            engineerHTML=`<section class="card">
<header>${engineer.getName()}</header>
<p>ID: ${engineer.getId()}</p>
<p>EMAIL:${engineer.getEmail()}</p>
<p>Office Phone: ${engineer.getGitHub()}</p>
</section>`
            wholeHTML+=engineerHTML
            switch(data.Continue){
                case 'Engineer':
                    EmployeeE()
                    break
                case 'Intern':
                    EmployeeI()
                    break
                case `I don't want to add any more team members`:
                    wholeHTML+=htmlEnding
                    fs.writeFile('./dist/index.html', wholeHTML, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                    );
                    break
            }
            
        })
}
function EmployeeI(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What's the Intern's name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What's the Intern's ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What's the Intern's Email?`,
            },
            {
                type: 'input',
                name: 'school',
                message: `What's the Intern's school?`,
            },
            {
                type: 'list',
                name: 'Continue',
                message: `Which type of Team Member would you like to add?`,
                choices: ['Engineer', 'Intern', `I don't want to add any more team members`],
            },
        ])
        .then((data)=>{
            var intern =new Intern(data.name,data.id,data.email,data.school)
            internHTML=`<section class="card">
<header>${intern.getName()}</header>
<p>ID: ${intern.getId()}</p>
<p>EMAIL:${intern.getEmail()}</p>
<p>Office Phone: ${intern.getSchool()}</p>
</section>`
            wholeHTML+=internHTML
            switch(data.Continue){
                case 'Engineer':
                    EmployeeE()
                    break
                case 'Intern':
                    EmployeeI()
                    break
                case `I don't want to add any more team members`:
                    wholeHTML+=htmlEnding
                    fs.writeFile('./dist/index.html', wholeHTML, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                    );
                    break
            }
            
        })
}







EmployeeM()
