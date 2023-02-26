/**
 * Store Student info in JSON
 */


// Symbols

const ajay1 = Symbol("Ajay");
const ajay2 = Symbol("Ajay");

function Student (name, email , password) {
    if (findUserByName(name)) {
        const name = Symbol(name);
    }
    else {
       this.name = name;
    }
    
  
}
const students = {
  ankit: {
    name: "Ankit",
    age: 23,
    email: "abc@gmail.com",
    yearOfGrad: 2023,
  },
  simran: {
    name: "simran",
    age: 23,
    email: "abc@gmail.com",
    yearOfGrad: 2023,
  },

  rahul: {
    name: "rahul",
    age: 23,
    email: "abc@gmail.com",
    yearOfGrad: 2023,
  },
  shibu: {
    name: "Shibu",
    age: 23,
    email: "abc@gmail.com",
    yearOfGrad: 2023,
  },
  nitin: {
    name: "nitin",
    age: 23,
    email: "abc@gmail.com",
    yearOfGrad: 2023,
  },
  ajay1 : {
    
  }
};

students[ajay1] = ajay1;
students[ajay2] = ajay2;
const obj1 = students.ajay1;
const obj2 = students.ajay2
console.log(obj1, obj2);
