// // print number from 5 -100
// for (var i = 5; i <= 100; i++) {
//   console.log(i);
// }

// // print number from 90-100

// for (var i = 90; i <= 100; i++) {
//   console.log(i);
// }

// // print all even numbers between 50 -100
// for (var i = 50; i <= 100; i += 2) {
//   console.log(i);
// }

// To declare a function 

// use function keyword
// give function name
// 
function forLoops (start, end, step) {
    for (var i = start; i <= end; i+= step) {
      console.log(i);
    }
}

// // print number from 5 -100
// forLoops(5,100,1);

// // print number from 90-100
// forLoops(90,100,1);
// forLoops(50,100,2);

// Function declaration

// logMsg -> 

// 
// function logMsg(msg = 68, number="Default value") {
//     console.log(msg, number);
// };


// Function call
//logMsg(100, "cdhcdjc");

var a = 90;


// Function expression
var logMsgVariable = function logMsg (msg) {
  console.log(msg);
};

console.log(logMsgVariable);

logMsgVariable("test");
logMsgVariable = 90;
console.log(logMsgVariable);
logMsgVariable();

function addTwoNumber (a) {
  var b = 90;
  return a+b;
}

const sum = addTwoNumber(100);
console.log(sum);
console.log(b);

function handleSlide() {
  // get all the images
  var images = document.querySelectorAll(".slide-in");

  images.forEach(function (img) {
    var distnaceFromOriginInYDirection =
      window.scrollY + window.innerHeight - img.height / 2;
    var imageBottoMDistnaceFromOrigin = image.offsetTop + img.height;

    var isImageFullyScrolled =
      distnaceFromOriginInYDirection > imageBottoMDistnaceFromOrigin;
    var isImageHalfScrolled = distnaceFromOriginInYDirection > images.scrollTop;
    alert(isImageFullyScrolled, isImageHalfScrolled);
    if (isImageHalfScrolled && !isImageFullyScrolled) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}
