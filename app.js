
// Return the sum of two numbers

// function addition(num1, num2) {
//     return num1 + num2
// }
// console.log(addition(7, 3))


// Convert hours into seconds
// function hoursIntoSeconds(hour) {
//     let minutes = hour * 60
//     let seconds = hour * 60 * 60
//     return hour * 60 * 60
// }

// console.log(hoursIntoSeconds(24));



// calculate the perimeter of a rectangel

// function calcperimeter (L, W) {

//     return 2 * (L + W)
  
// }

// console.log(calcperimeter(2, 9));


// Calculate the area of a triangle

// function calcTriangleArea (base, height) {

//     return 1/2 * base * height
  
// }

// console.log(calcTriangleArea(20, 20));


// Calculate the area of a triangle

// function calcTriangleArea (base, height) {

//     return 1/2 * base * height
  
// }

// console.log(calcTriangleArea(20, 20));


// Calculate the area of a triangle

// function appendFrontend (string) {

//     return string + "Frontend";
  
// }

// console.log(appendFrontend("oringe"));


// Greater than 100

// function sumGreaterThan100 (num1, num2) {

//     return num1 + num2 > 100
  
// }

// console.log(sumGreaterThan100(100, -50));

// Less than or Equall to zero

// function lessThanOrEqualToZero (num1) {

//     return num1 <= 0;
  
// }

// console.log(lessThanOrEqualToZero(-2));


// Opposite boolean

// function OppositeBoolean(bool) {

//     return !bool
  
// }

// console.log(OppositeBoolean(false));

// Is not the number 0

// function isNotZero(num) {

//     return num !== 0
  
// }

// console.log(isNotZero(null));

// Calculate the remainder

// function CalcRemainder(num1, num2) {

//     return num1 % num2;
  
// }

// console.log(CalcRemainder(9, 8));

// is the number odd?

// function isOdd(num) {

//     return num % 2 !== 0;
  
// }

// console.log(isOdd(3));


// if a number is even, return 1 otherwise return -1

// function booleanInterger(num) {

//     if (num % 2 === 0 ) {
//         return 1;
//     }
//     return -1;
  
// }

// console.log(booleanInterger(10));

// function booleanInterger(num) {

//    return num % 2 === 0 ? 1 : -1
  
// }

// console.log(booleanInterger(6));


// console.log(booleanInterger(10));



// check if a user is logged in and subscribed

// function booleanInteger(num) {
//     return num % 2 === 0 ? 1 : -1
// }
// console.log(booleanInteger(8))


// check if a user is logged in and subscribed

// function isLoggedInAndSubscribed(loggedIn, subscribed) {
    
// return (loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED') 
   
    
// }

// console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"))


// check if a user is logged in or subscribed

// function isLoggedInAndSubscribed(loggedIn, subscribed) {
    
// return (loggedIn === 'LOGGED_IN' || subscribed === 'SUBSCRIBED') 
   
    
// }

// console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"))

// function falsyOrTruthy(elem1, elem2) {
//     return (!elem1) ? elem1 : elem2
// }
// console.log(falsyOrTruthy(true, 'Dog'))


// // Array length
// function arrLength(arr) {
//     return arr[arr.length-1];
// }
// console.log(arrLength([4, 5, 6, 10, -12]));





// function arrSum(arr) {
//     let sum = 0;
//     for  (let i = 0; i < arr.length; ++i) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(arrSum([0, -5, -10]));

// // Add up number from a signle number

// function progressivesum(num) {

//     let sum = 0;
//     for  (let i = 1; i <= num; ++i) {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(progressivesum(60));


// Calculate the time,given a number in seconds return this number in mm:ss

// function CalcTime(seconds) {

//     let timerMinutes = Math.floor(seconds / 60);

//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1) 
//         {
//         timerMinutes = '0' + timerMinutes
//     }

//     return timerMinutes + ":" + timerSeconds;


// }

// console.log(CalcTime(500));


// find the largest number in an array


// function getMax(arr) {
//     let max = arr[0];

//    for (let i = 1; i < arr.length; ++i) {

//     if (arr[i] > max ) {
//         max = arr[i];
//     }


//    }
//    return max;

// }

// console.log(getMax([500, 400, 750]));

// Reverse a string (given a string, retun the reversed string)

// function reverseString(str) {
//     let reverseString = ''
//     for ( let i = 0; i < str.length; ++i) {


//         reverseString = str[i] + reverseString;
//     }
//     return reverseString;

   
// }

// console.log(reverseString('Thanks be to God almighty'));

// function reverseString(str) {
//     return str.split('').reverse().join('');
   
    
//     }
  
// console.log(reverseString('I love programming'));

// Turn every element in an array into 0


// function ConvertToZeros(arr) {

//   let  newArr = [];
   
//     for (let i = 0; i < arr.length; ++i) {

//         newArr[i] = 0;
//     }
//     return newArr;
    
//     }
  
// console.log(ConvertToZeros([5, 100, 0]));


// function ConvertToZeros(arr) {
// return arr.map(elem => 0)
    
// }
 
    
  
// console.log(ConvertToZeros([1, 2, 3, 4, 5, 6]));




// filter out all the apples

// function removeApples(arr) {
//     return arr.filter(elem => elem !== 'apple');
// }
// console.log(removeApples(['apple', 'banana', 'orange', 'apple', 'grape']));


// function removeApples(arr) {
//    for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] === 'apple') {
//             arr.splice(i, 1);
//             i--; // Adjust index after removal
//         }
//     }
//     return arr;
// }
// console.log(removeApples(['apple', 'banana', 'orange', 'apple', 'grape']));


// function removeApples(arr) {
//     let noApples = [];
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'apple') {
//             noApples.push(arr[i]);
//         }
//     }
//     return noApples;    
// }
// console.log(removeApples(['apple', 'banana', 'orange', 'apple', 'grape']));


// Filter Out all the falsy values

// function filterOutFalsy(arr) {
//     return arr.filter(elem => !!elem === true);
// }
// console.log(filterOutFalsy(["",[], "apple", 0, null, undefined,"Banana" , "0"]));


// function filterOutFalsy(arr) {
//     let trutthyarr = [];

//     for (let i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true) {
//             trutthyarr.push(arr[i]);
//         }
//     }
//    return trutthyarr;
// }
// console.log(filterOutFalsy(["", "apple", 0, null, undefined,"Banana" ,[],  "0"]));

// Truthy to true, Falsy to false

function convertToBoolean(arr) {
    return arr.map(elem => !!elem);
}

console.log(convertToBoolean([500, 0, "David", "", []]));