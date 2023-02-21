/**
 *  Objects are Non primitive Data Type 
 *  We use objects to store data in key value form
 */

var a = 90;
a = true;
a = "string"
a = [90, true, "string"] // Array

/**
 *  student : {
 *      name: "Rahul",
 *      course: "Frontend",
 *      module: "F2"
 * }
 */

//  class Student {
//     string name;
//     string count;
//     string module;
//     int age;
//  }

//  var s1 = new Student()

var student = {name: "Rahul", course: "Frontend", age: 24};
console.log(student)

var user = {};


user.name = "Ankit";
user.rollNo = 12; 

console.log(user);


var product = {
  price: 900000,
};
var product = new Object();


// You have to pass key value in string
product["name"] = "IPhone";
product["price"] = 670000;

console.log(product);
product["price"] = 50000;
product.category = "phone";

console.log(product);

delete product.category;

product.category = ["phone", "iphone", "apple", "mid-range"];
product.isAvailable = true;
product.giveDiscount = function (discountPercentage) {
   // It allow us to refer to same object using which it is getting created
     var discountValue =  Math.floor(product.price * (discountPercentage /100 ))
     return product.price - discountValue;
};

product.info = {
    madeIn : "India",
    year: 2022
}


console.log("category",product.category);
console.log("category2", product["category"]);
console.log("ProductInfo", product.logProductInfo());
console.log("year",product.info.year); // Accessing nested object
console.log("year2", product.info["year"]);
console.log("year3", product["info"]["year"]);
console.log("year5", product["info"].year);


// How we can access keys of objects 

var productKeys = Object.keys(product); // Array of strings
console.log(productKeys);

/**
 *  Given an object print all its keys and value in a new line
 */

productKeys.forEach( function (key) {
    console.log(key, product[key]) // product["name"];
})

/**
 *  obj[key] = value;
 *  Given a object create a new object with interchanging keys and value
 *  { "name" : "rahul",
 *     age : 24
 * } 
 * 
 * {
 *  "rahul": "name",
 *   24 : age
 * }
 */

var user = {
    name : "Rahul",
    age: 24
};
var userKeys = Object.keys(user); //["name", "age"]

var updatedUser = {};

userKeys.forEach(function (key) { // "name"
    var value = user[key] // rahul
  updatedUser[value] = key; // updatedUser["rahul"] = "name"
});

console.log(updatedUser);

var userValues = Object.values(user);
console.log("User values", userValues);

//{name: rahul} [[name,rahul]]
var userEntries = Object.entries(user); // Array of array
console.log("Entries", userEntries);

userEntries.forEach(entry => { //[name, rahul];
    const [key,value] = entry; // Array destructing
    console.log(key, value);
})



const {year, madeIn} = product.info;
console.log(year, madeIn);


