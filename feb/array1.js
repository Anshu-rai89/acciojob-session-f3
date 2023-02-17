

// We use return if we want to send some data back 
function findLargestIndex (arr) {
    var index = -1;
    var largestElement = -1;

    for(var i = 0; i< arr.length ; i++) {
        if(arr[i] > largestElement) {
            largestElement = arr[i];
            index = i;
        }
    }

    return index;
}

function avergeResult(arr) {
  // we need to calculate some of all element of array ;

  var sum = 0;
  // [1,2,3,4]
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = 1 + 2 + 3+ 4
  }

  // we need to find the length of array

  var size = arr.length;

  var res = sum / size;
  return res.toFixed(2);
}

var arr = [5, 10, 15, 20];
var avg = avergeResult(arr);
// 0(N)
var largestIndex = findLargestIndex([1 ,2, 7, 4,10,6, 5, 8, 3 ,9]);
console.log(largestIndex, " ", avg);


var a = [10,20,2,67,0,-1];

// Find the index of element 0 in a
// check if 67 is present in a or not 
// remove all even elements from a

var present = a.find(function (item) { return item== 134});
console.log(present);

var index = a.findIndex(function (item) { return item == 67});
console.log(index);

// index = a.findIndex(function (item) {
//   return item == 0;
// });

index = a.findIndex(function (item) {
  return item == 67890;
});
console.log(index);

// filter 
var ansArray = a.filter(function (value) {  return value %2 ==0})
console.log("ansArray", ansArray);
console.log(a);


// Higher order function
function getEvenData (randoFN) {
  const data = randoFN();
   if(data %2 == 0) return data;
   return 0;
}

var res = getEvenData(function () {
  return 89;
});

console.log(res);

//sort in ascending order
ansArray.sort(function(x,y) { return x-y});
console.log(ansArray);

// Sort in Descending
ansArray.sort(function (a, b) {
  return b - a;
});
console.log(ansArray); 


var newArray = [1,4,9,10,-4,19, 0, 34];

// Return the max element of array 
// Return the sum of array ;

  var sum = 0;
  
  // for(var i=0; i<newArray.length ; i++ ) {
  //   sum += newArray[i]; 
  // }

  // another way of iterating arrays
  //[1,4,9,10,-4,19, 0, 34]
  for (var value of newArray) {
    sum += value;
  }

  console.log(sum);

  // accumulator value will be created in memory
  function sumArray(accumulator, currentValue) {
    //console.log(accumulator,currentValue);
    return accumulator + currentValue;
  }


  /**
   * Reduce is an higher order function it takes a function as argument
   * Return a single value
   * [100,4,9,10,-4,19, 0, 34] -> Single value
   */
 var sum =  newArray.reduce(sumArray,0);
 console.log(sum);

 //newArray.forEach(currentValue => console.log(currentValue));
// 
 var maxElement = newArray.reduce(function (ans, current_value) {
    return current_value > ans ? current_value : ans;
 },Number.MIN_SAFE_INTEGER);

 console.log("Largest", maxElement);

  // N 131

  // run a loop from 2 to sqrt (131)
  // if (N %i ===0 ) return false;
  // return true;
