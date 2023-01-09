

/**
 *  Functional Approach 
 *   Accio JOB Platform 
 *   Users ->
 */



// const userCreaterFunction = (name,email) => {
//     const user = Object.create(null) // new Object();
//     user.name = name;
//     user.email = email;
//     user.id = new Date().getTime();
//     user.__proto__.login = () => {
//         console.log("User is Logged in");
//     }
//     user.__proto__.logout = () => {
//         console.log("User is Logged in");
//     }
//     user.__proto__.enRollInModule = function (moduleName) {
//       console.log(`${this.name} is Enrolled in ${moduleName}`);
//     };
//     return user;
// }
// How do We Create these Users 10k
// const users = {
//     name: "Rahul",
//     email: "abc@gmail.com",
//     id: new Date().toString(),
//     login : () => {
//         console.log("User is Logged In.")
//     },
//     logOut : () => {
//         console.log("User is Logged Out.");
//     },
//     enRollInModule : (moduleName) => {
//         console.log("User is Enrolled in Module",moduleName)
//     }
// }

// Constructer Functions 
function CreateUser (_name,_email) {
    this.name = _name;
    this.email = _email;
    this.id = Date.now();
}

const user = new CreateUser('Anshu','abc@gmail.com');
user.__proto__.login = function () { console.log(`${this.name} is Logged in`)}
const user1 = new CreateUser("Rahul", "abc@gmail.com");


function Developer (_name,_email,_totalNoOfExperience) {
    const user = new CreateUser(_name,_email);
    user.totalNoOfExperience = _totalNoOfExperience;
}

const developers = new Developer('Anshu','abcd@gmail.com');