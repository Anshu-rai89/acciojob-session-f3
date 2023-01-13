class Human {
    constructor(_name, _age, _gender) {
        this.name = _name;
        this.age = _age;
        this.gender = _gender;
    }

    describe() {
        console.log(`I am ${this.name} my age is ${this.age}.`);
    }

    walk() {
      console.log(`${this.name} is walking`)
    }
}

const rahul = new Human('Rahul',0,'Male');
rahul.describe();

class Developer extends Human {
  constructor(_name, _age, _gender, _noOfYearExperience, _skill) {
    super(_name, _age, _gender);
    this.noOfYearExperience = _noOfYearExperience;
    this.skill = _skill
  }

  describe() {
    //super.describe();
    console.log(`I am developer my name is ${this.name}.I have total ${this.noOfYearExperience} experience in ${this.skill}`);
  }

  // This function was received from Hman
  walk() {

  }
 
}

const simran = new Developer('Simran',22, 'female', 2, 'MERN');
simran.describe();
simran.walk();
simran.fly()