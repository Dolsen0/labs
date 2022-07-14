// LAB 1 
//- What number's bigger?
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").



// function greaterNum(x,y){
//     if(x>y){
//         console.log(x)
//     }else if(x<y){
//         console.log(y)
//     } else{
//         console.log(`they are the same number`)
//     }
// };

// greaterNum(1,10)

// let x = 5
// let y = 7


// function greaterNum(x,y){
//     if(x > y){
//         return x
//     }else{
//         return y
//     }
// }
// const greaterNumber = greaterNum(x,y);
// console.log(`The larger number between ${x} and ${y} is ${greaterNumber}`)




// LAB 2 -
// The World Translator
// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.



// function helloWorld(lang = `en`){
//     if(lang == `en`){
//         console.log(`hello world`);
//     }else if(lang == `es`){
//         console.log(`hola mundo`);
//     }else if(lang == `de`){
//         console.log(`hallo welt`)
//     }

// };

// helloWorld()



// function helloWorldSwitch(lang = "en"){
//     let greeting = " "
    
//     switch(lang) {

//         case "en":
//             return "hello world"
//             break;
//         case "es":
//             return "hola mundo!"
//             break;
//         case "de":
//             return "hallo welt"
//             break;
//         default:
//             return "I don't know"
//             breakl
//     }
// };

// console.log(helloWorldSwitch());



// LAB 3 - 
//The Grade Assigner
// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.



// function assignGrade(score){
//     if(score > 89){
//         return(`A`)
//     }else if(score>79){
//         return(`B`)
//     }else if(score>69){
//         return(`C`)
//     }else if(score>59){
//         return(`D`)
//     }
//     else{
//         return(`F`)
//     }
// }
// console.log(assignGrade(84))



// LAB 4 -  
//The Pluralizer
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".



// function pluralize(num,noun){
//     if(num == 1){
//        return(`I have ${num} singular ${noun}`)
//     }else{
//         return(`I have ${num} ${noun}s`)
//     }
// }

// console.log(pluralize(5,`dog`))


// LAB 5 - 
//Check if input variable is a number or not
// Function `isNumber()` checks if input variable is a number by using isNaN() in-built JavaScript function. Read more about isNan() from w3schools.com/jsref/jsref_isnan.asp.
// Print "Variable is not a number" if isNaN() returns true.
// Else print "Variable is a valid number" if isNaN() returns false.



// function isNumber(value){
//     if(isNaN(value)){
//         return `it is not a number`
//     }else{
//         return `it's a number`
//     }
// }
// console.log(isNumber(`f`))




// LAB 6 - 
//Find the largest of two number
// Function `findLargest()` finds the largest between two number by using ">" and "=" operator in JavaScript.
// Print num1 is the largest if num1>num2.
// Print num2 is the largest if num1<num2.
// Else print num1 and num2 are equal when num1==num2.


// function findLargest(num1, num2){
//     if(num1 > num2){
//         return num1
//     }else if(num1 < num2){
//         return num2
//     }else{
//         return(`they are equal to each other(${num1})`)
//     }

// }

// console.log(findLargest(84,84))



// LAB 7 - 
//Find the largest of three number
// Function `findLargest()` finds the largest of three number by using ">" and "&&" operator in JavaScript.
// Print num1 is the largest if num1>num2 and num1>num3.
// Print num2 is the largest if num2<num3.
// Else print num3.

// function findLargest(num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         return num1
//     }else if (num2 > num1 && num2 > num3){
//         return num2
//     }else{
//         return num3
//     }
// }

// console.log(findLargest(4,76,3))

// LAB 8 - 
//Find the a number is present in given range
// Function `checkInRange()` finds if the given number is within the provided start and end range using >=, <= and && operators in JavaScript.
// Print "Between the range" if num is between start and end values
// Else Print "Outside the range" since num is outside start and end values.



// function checkInRange(value, min, max){
//     if (value >= min && value <= max){
//         return `Between the range`
//     }else{
//         return`outside the range`
//     }
// }

// console.log(checkInRange(54,29,50))



// LAB 9 - 
//Perform arithmetic operations on two numbers
// Function `evalNumbers()` prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.
// Print result of num1+num2 if operation is "add"
// Print result of num1-num2 if operation is "subtract"
// Print result of num1*num2 if operation is "multiply"
// Print result of num1/num2 if operation is "divide"
// Print result of num1%num2 if operation is "modulus"
// Else print "Invalid operation"




// let num1 = 24
// let num2 = 10
// function evalNumbers(operation){
//     if(operation == `add`){
//         return num1 + num2
//     }else if(operation == `subtract`){
//         return num1 - num2
//     }else if(operation == `multiply`){
//         return num1 * num2
//     }else if(operation == `divide`){
//         return num1 / num2
//     }else if(operation == `modulus`){
//         return num1 % num2
//     }else{
//         return "Invalid operation"
//     }

// }

// console.log(evalNumbers(`divide`))





// LAB 10 - 
//Find the grade for input marks
// Function `findGrade()` to find the grade of the student based on the input marks.

// Print "S grade" if marks is between 90 and 100.
// Print "A grade" if marks is between 80 and 90.
// Print "B grade" if marks is between 70 and 80.
// Print "C grade" if marks is between 60 and 70.
// Print "D grade" if marks is between 50 and 60.
// Print "E grade" if marks is between 40 and 50.
// Print "Student has failed" if marks is between 0 and 40.
// Else print "Invalid marks".






// LAB 11 - 
//Find if someone is old enough to go in the bar.
// Use a Function `findAge()` and If-else statements to find the age of the student based on their age.

// Print "Come on in." if age is 21 or older.
// Print "Go Home, you are not old enough to get in." if age is less than 21.
// Else print "please give me your age." if a number is not given.


// function findAge(age){
//     if(age >= 21){
//         return`Come on in`
//     }else if(age < 21){
//         return`Go Home, you are not old enough to get in.`
//     }else{
//         return "please give me your age."
//     }
// }

// console.log(findAge(21))