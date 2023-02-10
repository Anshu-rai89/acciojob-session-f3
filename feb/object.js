var books = {name: "Rd sharma", price: 200, releaseYear : 2007};
console.log(books);

var key = "price";
var books = {};
//var books = new Object(); // []
books.name = "Rd sharma";
//books["name"] = "Rd sharma"
books[key] = 200;
books["releaseYear"]= 2007;

console.log(books);

var obj = Object.create(null);
console.log(obj);

console.log(new Object());

var price = books.price;
console.log(price);
books.price = 700;
console.log(books.name);
console.log(books.price);

delete books["price"];
console.log(books);
console.log(books.price);

// print all keys values of object

//{name: "RD sharma", price: 200}

// name Rd sharma
// price 200
// books.forEach(function (value) {
//     console.log(value);
// })

var keys = Object.keys(books); //["name", "price"]
console.log(keys); 

//
keys.forEach(function (key) {
  console.log(key, books[key]);
});

//
var ans = "";
for(var i = 0; i<keys.length ; i++) {
    ans += `{${keys[i]} : ${books[keys[i]]}}` + ", ";
}
console.log(ans);