// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());


 

// Write a JavaScript program to convert a number to a string.
let number = 250

let changeNumber = function(){
    let newNumber = number.toString();
    console.log(newNumber);
}

changeNumber()

// Write a JavaScript program to convert a string to the number.
let newWord = "200"

let toNumber = function(){
    let toWord = Number(newWord);
    console.log(toWord);

}

toNumber()




// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  let dataTypes = function(things) {
    let answer = typeof(things);

    console.log("the type of ", things, " is a" , answer);
}

dataTypes(false);
dataTypes(null);
dataTypes(undefined);
dataTypes(6);
dataTypes(NaN);
dataTypes("jose");

  
// Write a JavaScript program that adds 2 numbers together.
let soma = function(num1 , num2){
  let result = num1 + num2;
  return result;
}
let sum = soma(5, 5);

console.log("the answer is: " , sum)

// Write a JavaScript program that runs only when 2 things are true.
let variaOne = 10 > 2
let variaTwo = 25 < 30

if (variaOne && variaTwo) {
  console.log("both are true");
} else {
  console.log("LIER")
}

// Write a JavaScript program that runs when 1 of 2 things are true.
let variaTree = 30 > 3
let variaFour = 23 === 10

if (variaTree || variaFour){
  console.log("one of them is true")
} else {
  console.log("didnt work")
}

// Write a JavaScript program that runs when both things are not true.  
let variaFive = 15 === 27
let variaSix = 2 != 2

if (!variaFive && !variaSix){
  console.log("Both False")
} else {
  console.log("LIER AGAIN")
}