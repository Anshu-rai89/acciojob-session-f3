
/**
 *  I want to print a message hello after 3 second
 */

/**
 *  setTimeout -> Web API 
 */


function logMsg(msg) {
    console.log(msg);
}

// console.log("Start");
// setTimeout(() => logMsg("Hey after 1s"),1000);
// setTimeout(() => logMsg("I am callback after 0s"), 0);
// setTimeout(() => logMsg("Hey after 2s"), 2000);   
// console.log("End");


// let flag = true;
// setTimeout(()=> {
//     flag = false;
// },2000);

// while(flag) {
//     console.log("Hello");
// }

// const promise = new Promise((resolve,reject)=> {
//     const data = fetchProfileData("Anshu");
//     resolve(data);
// })

// // Promises callback needed to be executed in order
// promise.then((data)=> {
//     console.log("Profile data");
//     return renderProfileData(data);
// }).then((data)=> {
//     console.log("render");
// }).catch(error=> console.log(error));


console.log("Start");
setTimeout(()=> {
    console.log("I am callback from Settimeout")
},0);

Promise.resolve("I am callback from Promise")
.then((data)=> {
    console.log(data);
}).catch(error=> console.log("Error",error));

 Promise.reject("I am callback from Promise2")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log("Error", error));

console.log("End");

log



/**
 * i am callback from promise
    i am callback from settimeout
 */