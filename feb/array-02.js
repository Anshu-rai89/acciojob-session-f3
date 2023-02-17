var a = [1,2,4,90,3];

// add data at end 
a.push(2);

// remove data from last
a.pop();

// remove front
a.shift();

// add front
a.unshift(10);

// remove from index
a.splice(1,1);

// Function to iterate 

a.forEach(function (value, index) {console.log(index, value)});
var newArr = a.map(function(value, index) {
    console.log(index, value);

    return value * value
})

console.log(newArr);