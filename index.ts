import inquirer from "inquirer";

let calculator = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'enter a number'
    },
    {
        type: 'number',
        name: 'num2',
        message:'enter a 2nd number'
    },
    {
        type:'list',
        name: 'operator',
        message:'Select Operator',
        choices:['Add', 'Subtract', 'Divide', 'Multiply']
    }
]);

let result:number;
switch(calculator.operator){
    case 'Add':
        result= calculator.num1 + calculator.num2;
        console.log('Addition of given numbers is '+ result);
        break;

    case 'Subtract':
        result= calculator.num1 - calculator.num2;
        console.log('Subtraction of given numbers is '+ result);
        break;

    case 'Divide':
        result= calculator.num1 / calculator.num2;
        console.log('Divide of given numbers is '+ result);
        break;

    case 'Multiply':
        result= calculator.num1 * calculator.num2;
        console.log('Multiple of given numbers is '+ result);
        break;
}