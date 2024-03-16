// Primitive - Call by Value

// 7 Types
// - String
// - Number
// - Boolean
// - Null
// - Undefined
// - Symbol
// - BigInt

const score = 100;
const scoreValue = 101.3;
const isLoggedIn = true;
const temp = null;
let temperature;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// console.log(typeof (bigNumber))

// const bigNumber = 2424526356464767n

// Non Primitive / Reference DataTypes

// Array
// Objects
// Functions

let heros = ["Shaktiman", "doga", "nagraj"]; //Array

let myObj = {
  name: "Sonali",
  age: 24,
};

const myFunction = function () {
  console.log("function called");
};

console.log(typeof myFunction)

