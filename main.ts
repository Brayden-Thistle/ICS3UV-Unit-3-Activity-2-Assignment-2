/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-11-24
 * @fileoverview created a program to tell you how many dollars and change you have
 */

// variable
let Money: number;
Money = Number(prompt("Input the cents please:"));

//constants
const dollars = (Money / 100);
const cents = (Money % 100);

//output
console.log(` that comes to ${dollars} dollars and ${cents} cents `)

console.log("\nDone");