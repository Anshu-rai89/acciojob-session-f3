/**
 * Scope -> Area of code where you can access a variable 
 *  Variable 
 *  Functions
 * 
 * There are 3 Type of Scope 
 * 
 * 1 Global 
 * 2 Function 
 * 3 Block -> Local
 * 
 * 
 * We can declare a variable using 3 keyword
 * 
 *  Var
 *      - If you are declaring a variable outside of function Then its scope is Global
 *      - If your are declaring variable inside function then scope is Functional
 * 
 *  Let 
 *      - It define variable with Block scope 
 *      - You cannot redeclare a same variable again within a scope
 *      - Memory for them is created before execution but js don't allow them to be accessed
 *        before initialization because of Temporal dead zone
 * 
 *  Const
 *      - It has block level scope
 *      - You cannot redeclare a same variable again within a scope
 *      - You have to initialize its value at the time of declaration 
 *      - You cannot change its value
 *      - Memory for them is created before execution but js don't allow them to be accessed
 *        before initialization because of Temporal dead zone 
 */

console.log(a); // Undefined

 //This will give an error
var a = 10; // Global
let c = 110; // Global

console.log(c);
let name; // Declaring a variable
const isLoggedIn = true;

if(a> 10){
    var b = 90; // Global
    let d = 10; // Block
    let c = 100; 
    console.log(d);
}

name = "Anshu"; // Initializing its value
function add (b) {
    var e = 100; // Functional
     return function log() {
        ++e;
        console.log(e);
     }
}

console.log(a);
console.log(b);

var log = add(10);
console.log(log());
console.log(log());

