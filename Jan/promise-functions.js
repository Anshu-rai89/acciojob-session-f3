const fetchBtn = document.getElementById('fetch');
function fetchTodos () {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";

    const todoPromise = fetch(apiUrl);
    console.log("Todo Promise", todoPromise); // {status: "Pending", result: undefined}
    todoPromise.then((res)=> {
        console.log("Fetch is resolved",data);
        return res.json();
    }).then((data)=> console.log("Data in json",data))
    .catch((error)=> console.error("Error in fetching todos",error));
}

// fetchBtn.addEventListener('click',fetchTodos);

// promise1.then((data)=> {
//     console.log("Inside then of promise1");
//     return getPromise("Promise2",3000)
// }).then(()=> {
//     console.log("Inside then of promise2");
//     return getPromise("Promise3",4000);
// }).then((data)=> {
//     const endTime = new Date();
// console.log("Inside then of promise3",endTime - startTime);
// }).catch((error)=> console.error("Error in promise",error));

// const promise2 = getPromise("Promise2",3000);
// const promise3 = getPromise("Promise3", 4000);

// promise1.then(()=> {
//     return promise2
// }).then(()=>promise3)
// .then((data)=> console.log("All resolved",promise3))
// .catch((error)=> console.error("Error",error))

function getPromise(value,time) {
    const promise = new Promise((resolve,reject)=> {
        setTimeout(()=> {
          if(time > 3000) {
            reject(value);
            return
          }

          resolve(value)
        },time)
    });

    return promise;
}

const promise1 = getPromise("Promise1",2000);
const promise2 = getPromise("Timeout after 3s",3001);
const promise3 = getPromise("Promise3",4000);


const startTime = new Date();

const promiseALL = Promise.all([promise1,promise2,promise3])
promiseALL.then((data)=> {
    console.log("Inside then of Promise.all",data,endTime-startTime);
}).catch((error)=> console.error("Promise.all rejected",error))


/** Cart 
 *  Pay Button 
 *  
 *  verifyUserCard() -> Tell us if a card is valid or not  2s
 *  getUserAccountBalance(amount) -> true/ false   3s
 *  isUserAuthorizedForPayment() -> true/false 4s
 *  
 *  verifyUserCard().then(()=> return getUserAccountBalance(amount))
 *  .then(()=> return isUserAuthorizedForPayment())
 *  .then(()=> {makePayment()})
 *  .catch(()=> console.error(error));   9s
 */


 Promise.all([
   verifyUserCard(), //2s
   getUserAccountBalance(amount), //3s
   isUserAuthorizedForPayment(), //4s
 ]
 ).then(()=> makePayment())
 .catch(()=> console.error("You cannot make the payment as of now"));


 /**
  *  I was scrapping Account details of a bank account 
  *  I had to go to bank website 
  *  I had to login 
  *  After successfull login 
  *  It was opening Home page which contains account info 
  *   <div id='accountNo'> 626373749 </div>
  *   <div class = 'accountInfo' > 626373749 <div>
  *   <div data-accountNo> 626373749 <div>
  * 
  *  getAccountNoById 
  *  getAccountNoByClass
  *  getAccountNoByDataID
  */

 /**
  * <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>
<body>
    <h3>
        Account Details
    </h3>
     <div class = 'accountInfo' > 626373749 <div>
    <script src="./promise-functions.js"></script>
</body>
</html>
  */
 //
   Promise.any([
     getAccountNoById("accountNo"), // rejected
     getAccountNoByClass("accountInfo"), // resolved
     getAccountNoByDataID("accountNo") // resolved
   ]
   )
     .then((accountNo) => {
       console.log("accountNo",accountNo);
     })
     .catch((error) => console.error("Error in getting account number", error));


     function getPromise(value, time) {
       const promise = new Promise((resolve, reject) => {
         setTimeout(() => {
           if (time === 3000) {
             resolve(value);
             return;
           }
           if (time === 4000) {
             resolve(value);
             return;
           }
           reject(value);
         }, time);
       });

       return promise;
     }

     const promiseRace = getPromise("Promise1", 7000);
     const promiseRace2 = getPromise("Promise2", 3000);
     const promiseRace3 = getPromise("Promise3", 4000);
    

  
     const promiseRaceWinner = Promise.allSettled([
       promiseRace,
       promiseRace2,
       promiseRace3,
     ]);
     
     promiseRaceWinner
       .then((data) => {
         console.log("Inside then of Promise.race", data, endTime - startTime);
       })
       .catch((error) => console.error("Promise.race rejected", error));