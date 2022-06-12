//Query select necessary variables
//Numbers buttons
const numberButtons = document.querySelectorAll(".number");
//Operators buttons
const operatorButtons = document.querySelectorAll(".operator");
//Clear, delete, equal sign and decimal point buttons
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal-point");
//Create the variables num1, num2 and operator and initialize them with null
let num1 = null;
let num2 = null;
let operator = null;
//Create the function add that takes 2 numbers as parameters and return their addition
function add(num1,num2){
    let addition = num1 + num2;
    //Return the rounded value to 2 numbers at most
    return Math.round((addition + Number.EPSILON) * 100) / 100;
}
//Create the function subtract that takes 2 numbers as parameters and return their subtraction
function subtract(num1,num2){
    let subtraction = num1 - num2;
    //Return the rounded value to 2 numbers at most
    return Math.round((subtraction + Number.EPSILON) * 100) / 100;
}
//Create the function divide that takes 2 numbers as parameters and return their division
function divide(num1,num2){
    if(num2 === 0){
        return "ERROR:You can't divide by 0!";
    }
    let division = num1/num2;
    //Return the rounded value to 2 numbers at most
    return Math.round((division + Number.EPSILON) * 100) / 100;
}
//Create the function multiply that takes 2 numbers as parameters and return their multiplication
function multiply(num1,num2){
    let multiplication = num1*num2;
    //Return the rounded value to 2 numbers at most
    return Math.round((multiplication + Number.EPSILON) * 100) / 100;
}
//Create the function operate that takes 2 numbers and an operator as parameters and returns one of the functions above
function operate(operator,num1,num2){
    switch(operator){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;        
    }
}