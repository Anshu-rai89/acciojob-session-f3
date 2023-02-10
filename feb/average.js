function avergeResult(arr) {
    // we need to calculate some of all element of array ;

    var sum = 0;
     // [1,2,3,4]
    for(var i = 0 ; i< arr.length ; i++) {
        sum += arr[i]; // sum = 1 + 2 + 3+ 4
    }

    // we need to find the length of array

    var size = arr.length;

    var res = (sum / size);
    return res.toFixed(2);
}

var arr = [5, 10, 15, 20];
console.log(avergeResult(arr));