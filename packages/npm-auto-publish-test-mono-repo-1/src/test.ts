class Animal {
  constructor(public name: string, public age: number) {}

  displayInfo(): void {
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
    console.log(`This is ${this.name}, ${this.age} years old.`);
  }
}

interface Food {
  type: string;
  calories: number;
}

export { Animal, Food}
