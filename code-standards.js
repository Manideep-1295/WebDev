/**
 * Adds two numbers
 * @param {*} n - The first number.
 * @param {*} m - The second number.
 * @returns {number} - The addition of n and m
 * @example
 * addition(2,3); // returns 5
 */

function addition(n, m) {
  return n + m;
}
let a = 10;
let b = 20;
console.log(`The Addition of ${a} and ${b} is : `, addition(a, b));

// Write a function to make it uppercase
/**
 * Converts lowercase to uppercase
 * @param {String} s - Given string
 * @returns {String} - The uppercase of String s
 * @example
 * convertToUpperCase("hello"); // returns "HELLO"
 */
const convertToUpperCase = (strLower) => strLower.toUpperCase();
let strLower = "hi! im lower case sentence";
console.log(`Resultant String : `, convertToUpperCase(strLower));
