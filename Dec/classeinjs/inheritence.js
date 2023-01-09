
/**
 * Inheritance in Classes 
 *  What it is ? 
 *  Parent Class & Child class  
 */

 class Human {
    constructor(_name, _age, _gender) {
        this.name = _name;
        this.age = _age; 
        this.gender = _gender;
    }

    describe() {
        console.log(`I am ${this.name} . My age is ${this.age}`)
    }
}

class Developer extends Human {
  constructor(_name, _age, _gender, _yearOfExperience, _skill) {
    super(_name, _age, _gender);
    this.yearOfExperience = _yearOfExperience;
    this.skill = _skill;
  }

  // Overriding 
  describe() {
    super.describe();
    console.log(`I am ${this.name} . My age is ${this.age} & I have Experience of ${this.yearOfExperience} in ${this.skill}`);
}
}

const human = new Human('Rahul',23,'Male');
const developer = new Developer('Simran',23,'Female',2, 'MERN');
developer.describe();
