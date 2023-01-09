


/**
 *  Merge Sort 
 */

let arr = [10,23,45,30,78,0,90,1,-1,11,34,65,79];

/**
 * 
 *  [10,23,45,30] arr2
 *  [78,0,90,1]  [0,90,1]
 *  [78]
 */


function mergeArray(arr1,arr2) {
  // We are going to merge them until any one of the arr becomes empty
  const finalArr = [];
  while(arr1.length && arr2.length) {
    if(arr1[0] > arr2[0]) {
      finalArr.push(arr1[0]);
      arr1.shift();
    }
    else {
      finalArr.push(arr2[0]);
      arr2.shift();
    }
    // arr1 = [] . arr2 =[90,1]
    // arr1 = [10] arr2 = []
  }

  return [...finalArr,...arr1,...arr2]
}
function mergeSort(unsortedArray) {

  if (unsortedArray.length < 2) {
    return unsortedArray;
  }
  // Divide 
    const midIndex = unsortedArray.length / 2;
    const arr1 = unsortedArray.splice(0, midIndex);

    const leftArray = mergeSort(arr1);
    const rightArray = mergeSort(unsortedArray);

  // merge

  return mergeArray(leftArray, rightArray);
}


 console.log( mergeSort(arr));

// //1
// async function f() {
//   let result = "first!";
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   result = await promise;

//   console.log(result);
// }

// f();

// // 2
// let fs = require("fs");

// console.log("1");

// fs.readFile("test.txt", "utf8", function (error, data) {
//   if (error) {
//     throw error;
//   }

//   console.log("2");
// });

// console.log("3");

// // 3
// async function async1() {
//   console.log(1);
//   await async2();
//   console.log(2);
// }

// async function async2() {
//   console.log(3);
// }

// console.log(4);

// setTimeout(function () {
//   console.log(5);
// }, 0);

// async1();

// new Promise(function (resolve) {
//   console.log(6);
//   resolve();
// }).then(function () {
//   console.log(7);
// });

// console.log(8);


// // convert the following code to asyn await 

// const getFirstUserData = () => {
//   return
//   // get users list
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json()) // parse JSON
//     .then((users) => users[0]) // pick first user
//     // get user data
//     .then((user) =>
//       fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
//     )
//     .then((userResponse) => userResponse.json()); // parse JSON
// };
// getFirstUserData().then((result) => console.log(result));