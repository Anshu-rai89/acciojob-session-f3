// Global Scope
var a = 10 ;
var e;

/**
 * Hoisting 
 *  In hoisting js move variable declarations at top
 */
if(a >= 10) {  
    var c = 100;
    //var b;
    // Block scope
    b = 90;
    console.log(b);
    var d = 100;
}

var e = 100;
console.log(b);



