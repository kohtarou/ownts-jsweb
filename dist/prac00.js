"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetAndCalculate(name, a, b) {
    const sum = a + b;
    return `Hello, ${name}! The sum of ${a} and ${b} is ${sum}.`;
}
const userName = "Alice";
const x = 10;
const y = 20;
const result = greetAndCalculate(userName, x, y);
console.log(result);
