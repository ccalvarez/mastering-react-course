import { Person } from './person';

export class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log(`I'm ${this.name} and my degree is ${this.degree}`);
  }
}
