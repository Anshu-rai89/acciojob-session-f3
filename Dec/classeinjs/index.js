

//  /**
//   *  Rectangle 
//   *  How can we pass data while creating object & how do we store them in class
//   *  Given a rectangle object you should find the area of it 
//   */


// class Rectangle {
//     constructor(_width, _height) {
//         this.width = _width;
//         this.height = _height;
//     }

//     logDimension () {
//         console.log("Height is",this.height);
//         console.log("Width is",this.width);
//     }

//     // Getters
//     get area () {
//         return this.height * this.width;
//     }

// }

// class Square {
//     constructor(_size) {
//         this.height = _size;
//         this.width = _size;
//     }

//     // Getters
//     get area () {
//         return this.height * this.width;
//     }

//     // Setters
//     set area (newArea) {
//         const size = Math.sqrt(newArea);
//         this.height = size;
//         this.width = size;
//     }

//     // Static function Accessible on Class only
//     static isValidDimension(a,b) {
//         return a == b;
//     }
    
// }

// const rec1 = new Rectangle(10,20);
// rec1.logDimension();
// const area1 = rec1.area;
// console.log(area1);

// const sq = new Square(10);

// // Update Area of square to 200;
// console.log(sq,sq.area);
// sq.area = 1000;
// console.log(sq.area);
// console.log(Square.isValidDimension(10,20));


/**
 *  We want to Fetch all posts & then i want to show the company details of user who
 * have posted this post 
 */

let userID = 0;
const BASE_URL = "https://jsonplaceholder.typicode.com",
    POST_URL = BASE_URL + '/posts'
    USER_URL = BASE_URL + '/user' + userID;


    function fetchData() {
         fetch(POST_URL
         ).then(console.log)
    }

 document.addEventListener('DOMContentLoaded',fetchData);
