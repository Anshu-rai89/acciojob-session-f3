// Global Scope
var a = 10 ; // Scope of var variables are Global or  Functional Scope
var e;
 var c;
 var d;

/**
 * Hoisting 
 *  In hoisting js move variable declarations at top
 */
if(a >= 10) { 
    console.log(a); 
    console.log(c);
    var c = 100; // Global
    //var b;
    // Block scope
    b = 90;
    console.log(b);
    var d = 100; // Global
}

console.log(c, d);



