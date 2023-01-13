/**
 *  We want to create users of accio job 
 *  createUser(name , email, password) => {
 *      name: "Rahul",
 *      email: "abc@gmail.com",
 *      password:"abc@123"
 *      id: 123
 *      login,
 *      logout
 *      renderTimeline()
 *      enrollInCourse()
 *      getAllTopicsOfModule()
 * }
 */


/**
 *  Two ways to create an object 
 *  new Object()
 *  {}
 *  Object.create(null)
 */
const  prototype  = {
      login : () => {
        console.log("User is logged in");
        },
    logout : () => {
        console.log("User is logged out");
    },

    enrollInCourse : (courseName) => { console.log("user is enrolled in",courseName)}
};

function Object () {
    
}

const obj = new Object();

 function CreateUser(_name , _email, _assword) {
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.id = new Date().toString();
 }

 CreateUser.prototype.login = () => { console.log("User is logged in");};
  CreateUser.prototype.logout = () => {
    console.log("User is loggedout in");
};

CreateUser.prototype.enrollInCourse = (courseName) => {
    console.log("User is enrolled in", courseName);
};

 
 const rahul = new CreateUser('Rahul','abc@gmail.com','abc@123')

  console.log(simran,rahul,sachin)

function Object () {
    const user = {};
    return user ;
}

function Square(_area) {
    const size = Math.sqrt(_area);
    this.height = size;
    this.width = size;
}

Square.prototype.logSq = function () {
  console.log(
    `I am square with height as ${this.height} and width as ${this.width}`
  );
};



const sq = new Square(100);
console.log(sq);