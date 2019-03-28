// Inheritance
class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`walk ${this.name}`);
  }
}

// All teachers should be able to walk:
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log(`I'm ${this.name} and my degree is ${this.degree}`);
  }
}

const teacher = new Teacher('Mosh', 'MSc');
teacher.teach();
