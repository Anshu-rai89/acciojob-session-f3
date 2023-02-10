var books = [];
// var books = Array(0);

// Add items at the end
books.push("Rd sharma");
books.push("NCERT");
books.push(80);

console.log(books);

// Remove items from back
books.pop()

// Remove items from beginning 
books.shift();

// Add items in the beginning
books.unshift("Rs agarwal");


// How we can access and print all arrays data

[1,2,3,4] // 4

// start is 0
// end is lenght-1
// step = 1

console.log("Array", books);
for(var i = 0; i<books.length; i++) {
    console.log(books[i])
}

function logvalues(value, index) {
    console.log(value,index);
}

console.log("Array", books);
//[1,2,3,4]
// for each
books.forEach(logvalues);
//books.forEach( function (book, index) { console.log(book,index)});
//books.forEach((book)=> {console.log(book)});

// Available only on array 
books.map(function(book) {
    console.log("Output from map", book);
});

// input
var nums = [1,2,3,4,5];

// return a array which stores suqares of nums array 
// [1,4,9,16,25];

// for (var i = 0; i < nums.length; i++) {
//   nums[i] *= nums[i]; // nums[2] = 3 * 3; 
// }

//[1,4,9]
console.log(nums);

//var nums = [1,2,3,4,5];
// var output = []
//   output = nums.forEach( function (value, index) {
//     var sq = value * value;
//     nums[index] = sq;
// })
console.log(nums);
console.log(output);

//Math.floor()  10.8 // 10 // ceil()
//[1,2,3,4,5];
var output = nums.map(function (value) {
    return value * value;
})

console.log(output);


var nums = [1, 2, 3, 4, 5];

nums.splice(2,1);

console.log(nums);

//splice(index, deleteCount, ...items to be added)

var nums = [1,5,3, 4]

// first delete 5,3
// add 7,8,9
var output = [1,7,8,9,4];
nums.splice(1,2,7,8,9);
console.log(nums);

