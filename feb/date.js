// Print the Todays Date & time
console.log(new Date());

console.log(sum());
var sum = (a, b = 10) => {
    const res = a+b;
    console.log(res);
    return res;
};