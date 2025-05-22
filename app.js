
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





function arrSum(arr) {
    let sum = 0;
    for  (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(arrSum([0, -5, -10]));