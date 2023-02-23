/**
 * Whenever a student register on accio job platform 
 * ypu need to create a student with some property 
 * & store them in DB
 * 
 * name
 * phoneNumber
 * course
 * password
 * email
 */

let student = {
    name: "Abhishek",
    phoneNumber : 1234567,
    email: "abhishek@gmail.com",
    password: "password",
    course:"Frontend"
}

let shibhu = {
  name: "Shibu",
  phoneNumber: 1234567,
  email: "shibu@gmail.com",
  password: "password",
  course: "Frontend",
};

function createStudent(name, phoneNumber,password, course) {
    var student = {};
    student.name = name;
    student.phoneNumber = phoneNumber;
    student.course  = course;
    student.password = password;

    return student;
}

const abhishek = createStudent('Abhishek', 123456, 'password', 'FE');
const Suraj = createStudent('Suraj', 123456, '123456', "FE");

console.log("Suraj",Suraj);

// We need to write a function which can create students for us

// I can create a constructor function which will create a student for me 

function Student(name, phoneNumber, password, course) {
  //{name : "Anshu"}

  // This will point to same object using which student is getting created
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.password = password;
  this.course = course;
  this.color = "red";
  this.skills = {
        name: "JS"
  }
}





const anshu = new Student("Anshu", 123456, 'password@1234', 'FE'); // {name : "Anshu"}
console.log(anshu);


// We can use JS object to store some data 
//JSON -> Javascript objects 
const books =
  [{
    "name": "Anshu", // Key value pair
    "title": "Rd sharma",
    "price": 890,
    releaseYear: 1990,
    publisher: "Penguin",
    noOfPages: 120,
    publisherDetails: {

    },
    authorDetails : {
      
    },
    metadata : {

    }
  }]

