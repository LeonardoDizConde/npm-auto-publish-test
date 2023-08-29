import { Animal } from "./test"


function generateRandomCode(length: number): string {
  const animal = {
    name: 'aaaaa',
    age: 5
  } as Animal
  const animal2 = {
    name: 'aaaaa',
    age: 5
  } as Animal
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
