"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateRandomCode(length) {
    const animal = {
        name: 'aaaaa',
        age: 5
    };
    const animal2 = {
        name: 'aaaaa',
        age: 5
    };
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomCode = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor((Math.random() * characters.length) % animal.age);
        randomCode += characters.charAt(randomIndex);
    }
    return randomCode;
}
const codeLength = 10;
const randomCode = generateRandomCode(codeLength);
console.log(`Random code: ${randomCode}`);
