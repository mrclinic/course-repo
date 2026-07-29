console.log('Hello World!');


//Variable Declarations
//using var key word
var grade = 100;
var x = 5;
var y = 6;
var z = x + y;
console.log(x, y, z)   //5 6 11

//using let key word
let x1 = 5;
let y1 = 6;
let z1 = x1 + y1;
console.log(x1, y1, z1)//5 6 11

//using const key word
const x2 = 5;
const y2 = 6;
const z2 = x2 + y2;
//y2 = 44;
console.log(x2, y2, z2);


let name = "Alice";  // String
let age = 25;        // Number
let amount = 99.99;   // Number
let isStudent = true;
let isLoggedIn = false;

console.log(name, age, amount, isStudent, isLoggedIn);

const arr = [1, 2, 3];
arr.push(4);         // ✅ Allowed
console.log(arr);    // [1, 2, 3, 4]

// arr = [5, 6];        // ❌ Error: Assignment to constant variable
const user = { name: "Alice" };
user.age = 25;       // ✅ Allowed
console.log(user);   // { name: 'Alice', age: 25 }

// user = { name: "Bob" };  // ❌ Error

/* let person = "John Doe";
let carName = "Volvo";
let price = 200; */
let person = "John Doe", carName = "Volvo", price = 200;

let person1 = "John Doe",
    carName1 = "Volvo",
    price1 = 200;

const pi = 3.14;


/* When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed(Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers. */

/* 
JavaScript Identifiers
All JavaScript variables must be identified with unique names.
These unique names are called identifiers.
Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
The general rules for constructing names for variables (unique identifiers) are:

    1- Names can contain letters, digits, underscores, and dollar signs.
    2- Names must begin with a letter.
    3- Names can also begin with $ and _ (but we will not use it in this tutorial).
    4- Names are case sensitive (y and Y are different variables).
    5- Reserved words (like JavaScript keywords) cannot be used as names.
 */


//null value
let emptyValue = null;
console.log(emptyValue)
//undefined
let carName2;//A variable declared without a value will have the value undefined
console.log(carName2)

//If you re-declare a JavaScript variable declared with var, it will not lose its value.
var carName3 = "Volvo";
var carName3;

console.log(carName3)

//You cannot re-declare a variable declared with let or const.
//let carName4 = "Volvo";
//let carName4;

let num = 5 + 2 + 3;
console.log(num)
let fullName = "John" + " " + "Doe";
console.log(fullName)


//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let multiTypes1 = 2 + 3 + "5"; //55
let multiTypes2 = 2 + 3 + 4 + 6 + "5";//155
let multiTypes3 = "2" + 3 + 4 + 6 + 7 + "5";//234675
console.log(multiTypes1)
console.log(multiTypes2)
console.log(multiTypes3)

//you can
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;

//Note
//Using the underscore is not very common in JavaScript,
// but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.



function greet(name) {
    console.log("Hello, " + name);
}

greet("Alice");
