

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