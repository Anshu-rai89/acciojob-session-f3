/**
 *  We want to create users on our platform 
 *  All users should have 
 *  name 
 *  email,
 *  password,
 *  confirm_password
 *  register () {name , email, password, confirm_password}
 *  
 */

//Single
const userFunctions = {
    register: function () {
       console.log(this);
    },
    login: function (token, num) {
        console.log("Inside login",this,token,num);
    }
}

// 10K 
function userCreation (name, email, password, confirm_password) {
    const user = {};
    user.name = name;
    user.password = password;
    user.email = email;
    user.confirm_password = confirm_password;
    return user;
}

const user1 = userCreation('Anshu','abc@gmail.com', '123', '');
const newUsers2 = userCreation("Ashu", "abc@gmail.com", "123", "");
const newUsers3 = userCreation("Ashu", "abc@gmail.com", "123", "");
const newUsers4 = userCreation("Ashu", "abc@gmail.com", "123", "");
const newUsers5 = userCreation("Ashu", "abc@gmail.com", "123", "");
const newUsers6 = userCreation("Rahul", "abc@gmail.com", "123", "");
const newUsers7 = userCreation("Rahul", "abc@gmail.com", "123", "");

function logMsg() {
    console.log("Log from logMsg",this);
}

const product = {
    name : "Tv",
    price: 40000
}
userFunctions.login.call(user1,'token1',12);
userFunctions.login.call(user1, "token1", 12);
userFunctions.login.call(users, "token1", 12);


 const newCopy = userFunctions.register.bind(user1);
 userFunctions.login = newCopy;
 userFunctions.login = userFunctions.login.bind(user1);

userFunctions.register();
userFunctions.register();
userFunctions.register();
userFunctions.login();
userFunctions.login();


 userFunctions.register = userFunctions.register.bind(product);


logMsg.call(user1);


// console.log(user1);

// const product = {
//     name: "Iphone",
//     price: 12345
// }

// const res = userFunctions.register.call(user);
// console.log(res);