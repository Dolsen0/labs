// 1
//write a function that counts down from ten and says blast off at 0

// function countDown(num){
//     for(let i = num; i >= 0; i--){
//         if(i ===0){
//             console.log("Blast Off")
//             break;
//         }
//         console.log(i)
//     }
// }

// countDown(100)



//2
//write a function that logs even numbers from 0-100

// function isEven(){
//     for(let i = 0; i <= 100; i++){
//         if(i % 2 === 0){
//             console.log(i)
//         }
//     }
// }

// isEven()


//3
//write a function that loops through an array of numbers and returns the total sum of the array

// const arr = [1,5,3,4,27];
// let sum = 0



// function totalSumOfArr(arr){
//     for(let i = 0; i <= arr.length - 1; i++){
//         sum = sum + arr[i]
//     }
//     console.log(sum)
// }

// totalSumOfArr(arr)



//// LAB 1 - Loops
// Create an array of names of your classmates
// Create a for loop that goes through the array and logs each name in the array
// Now create another for loop that goes through the array in REVERSE and logs each name

// EXAMPLE
// Array: const names = ['Jimmy', 'Frank', 'Ben']
// Output should be:
// Jimmy
// Frank
// Ben
// Ben
// Frank
// Jimmy

const names = [`John`, `Paul`, `Ringo`, `George`]

for(let i = 0; i <= names.length - 1; i++){
    console.log(names[i])
}

for(let i = names.length - 1; i >= 0; i--){
    console.log(names[i])
}


//use a for loop to print a half pyramid of *

// let pyramid = ""

// for(let i = 0; i <= 50; i++){
//     pyramid = pyramid + "*"
//     console.log(pyramid)
// }

let pyramidF = ""

function pyramid(num, char){
    for(let i = 0; i <= num; i++){
        pyramidF = pyramidF + char
        console.log(pyramidF)
    }
}

pyramid(46,"$")