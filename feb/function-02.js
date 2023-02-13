const { match } = require("assert");

try{
sum(5,6);

function sum(a,b) {
    var c = 10;
    console.log(a,b);
    return a+ b;
}

var b = 90;
var res = sum(1,2);
console.log(res);

console.log(functionExp);
functionExp();
// 
var functionExp = function (a,b) {
    return a+b;
}

console.log(functionExp(6, 5));
console.log("After log");
(function (a,b) {
    console.log(a,b)
}(2,3));


// Crete a function which can receive n numbers & return its sum 
 function sum(...args) {
    var sum =0;
    for(var i = 0; i<args.length; i++) {
        sum+= args[i];
    }
    return sum;
 }

  sum(1, 2, 3, 4, 5);
} catch(error) {
    console.log("Gracefull handling of error",error);
}



 //Error handling
 function multiply () {
    console.log(c);
    return c;
 }

 function math(a,b) {
    try{ 
        var res= multiply(a);
        console.log(c);
    } catch(error) {
        console.log("Error in multiply",error);
    } finally {

    }
 }
 math(10,20);

