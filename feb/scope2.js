
console.log(res);
var res = 100;
let f = 100;

// Till the code execution comes to line 8 f is not accessible 
// Line no 1 to kine 7 will be a temporal dead zone for variable f  // Block level scope
function add (b) {
    let f = 100;
    console.log(f);
    var c = 90;
    return b+c;
}

f = 90;
if(f > 0 ){
    // Ready only variables
    // they are immutable 
    const g = 190;

    let  = 30;
    console.log(g);
    console.log(f);
    let e = 120;
    let sum = add (134);
    console.log(sum);
}

console.log(e);