class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.fullName} ${this.lastName}.`;
  }

  markLate() {
    this.tardies += 1;

    if (this.tardies >= 3) return `You are expelled.`;

    return `${this.firstName} ${this.lastName} has been late ${
      this.tardies
    } times.`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    const sum = this.scores.reduce(function(a, b) {
      return a + b;
    });

    return sum / this.scores.length;
  }

  static EnrollStudents() {
    return 'Enrolling Students';
  }
}

let firstStudent = new Student('Juraj', 'Jarmek', 1, 0);
let secondStudent = new Student('Walter', 'White', 1, 0);

firstStudent.addScore(5);
secondStudent.addScore(5);

console.log(firstStudent);
console.log('\n');
console.log(secondStudent);
