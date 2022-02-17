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
                    console.log('continue to Engineer')
                    break
                case 'Intern':
                    console.log('continue to Intern')
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
