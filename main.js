//Query select necessary variables
//Display screen paragraphs
const writingScreen = document.querySelector(".writing-screen");
const resultsScreen = document.querySelector(".results-screen");
//Numbers buttons
const numberButtons = document.querySelectorAll(".number");
//Operators buttons
const operatorButtons = document.querySelectorAll(".operator");
//Clear, delete, equal sign and decimal point buttons
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal-point");
//Create the variables num1, num2, result and operator and initialize them with null
let num1 = null;
let num2 = null;
let operator = null;
let result = null;
//Call the populateScreen function
populateScreen();
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
//Create the function getNumber that adds a click event listener for each number button
function getNumber(){
    numberButtons.forEach((button)=>{
        button.addEventListener('click',()=>{
            //If the length is smaller than 9(JS numbers limit)
            if(writingScreen.textContent.length<9){
                //If the writing screen is showing 0 then replace it with the number
                if(writingScreen.textContent ==='0'){
                    writingScreen.textContent = button.value;
                }
                //Else concatenate the number to the writing screen
                else{
                    writingScreen.textContent += button.value;
                }
            }
            
        })
    })
}
//Create the function getOperator that adds a click event listener for each operator button
function getOperator(){
    operatorButtons.forEach((button)=>{
        button.addEventListener('click',()=>{
            //If num1 is null
            if(num1 === null){
                //Give num1 the value of the writing screen and operator the value of the button clicked
                num1 = writingScreen.textContent;
                operator = button.value;
                //Reset the writing screen to 0
                writingScreen.textContent = '0';
                //Write in the results screen
                resultsScreen.textContent = `${num1} ${operator}`
            }
            else{
                //Give num2 the value of the writing screen
                num2 = writingScreen.textContent;
                //Call the operate function using operator,num1 and num2 and assign its return value to the variable result
                result = operate(operator,+num1,+num2);
                //Give num1 the value of result, results screen the result value, writing screen '0', num2 null, result null and operator the button clicked
                resultsScreen.textContent = `${num1} ${operator} ${num2} = ${result}`;
                num1 = result;
                writingScreen.textContent = '0';
                num2 = null;
                result= null;
                operator = button.value;
            }
        })
    })
}
//Create the function getPoint that adds a click event listener to the decimal point button
function getPoint(){
    decimalButton.addEventListener("click",()=>{
        //If the writing screen doesn't include a decimal point then add it
        if(!writingScreen.textContent.includes(".")){
            writingScreen.textContent += '.';
        }
    })
}
//Create the function getEqual that adds a click event listener to the equal sign button
function getEqual(){
    equalButton.addEventListener("click",()=>{
        //If operator and num1 aren't null
        if(operator !== null && num1 !== null){
            //Assign the content of the writing screen to num2
            num2 = writingScreen.textContent;
            //Call the operate function and assign it to the result variable
            result = operate(operator,+num1,+num2);
            //Update the display screens
            resultsScreen.textContent = `${num1} ${operator} ${num2} = ${result}`;
            writingScreen.textContent = '0';
            //Give num1 the value of result and reset result and num2
            num1 = result;
            num2 = null;
            result = null;
        }
    })
}
//Create the function getDelete that adds a click event listener to the delete button
function getDelete(){
    deleteButton.addEventListener("click",()=>{
        //If the writing screen has only one number then set it to 0
        if(writingScreen.textContent.length === 1){
            writingScreen.textContent = '0';
        }
        //Else delete the last entered number
        else{
            writingScreen.textContent = writingScreen.textContent.slice(0,-1);
        }
    })
}
//Create the function getClear that adds a click event listener to the clear button
function getClear(){
    clearButton.addEventListener('click',()=>{
        //Reset num1,num2,operator,result,writing screen and results screen
        num1 = null;
        num2 = null;
        operator = null;
        result = null;
        writingScreen.textContent = '0';
        resultsScreen.textContent = '0';
    })
}
//Create the function populateScreen that calls all the functions
function populateScreen(){
    //If the results screen shows an error then reset everything
    if(resultsScreen.textContent === "ERROR:You can't divide by 0!"){
        num1 = null;
        num2 = null;
        operator = null;
        result = null;
        writingScreen.textContent = '0';
        resultsScreen.textContent = '0';
    }
    //Call all the functions
    getNumber();
    getOperator();
    getPoint();
    getEqual();
    getDelete();
    getClear();
}