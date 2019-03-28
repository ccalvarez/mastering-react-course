import { Person } from './person';

// Named export:
export function promote() {}

// Default export:
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log(`I'm ${this.name} and my degree is ${this.degree}`);
  }
}
