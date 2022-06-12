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
