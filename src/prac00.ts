export {};

function greetAndCalculate(name: string, a: number, b: number): string {
    const sum: number = a + b;
    return `Hello, ${name}! The sum of ${a} and ${b} is ${sum}.`;
}

const userName: string = "Alice";
const x: number = 10;
const y: number = 20;

const result: string = greetAndCalculate(userName, x, y);
console.log(result);