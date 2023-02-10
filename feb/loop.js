// In js we have a concept of loop 
// They are used to iterate between a range 

// We have to print number from 1 -100

/**
 *  Start condition 
 *  End condition
 *  Step 
 */

var start = 1;
var end = 100;
var step = 1;

// while loop 

// while (condition) -> if condition true loop will run if false it stop
while (start <= end) { // 101 <= 100
    console.log(start);
    start+= step ; // 100
}

// for loop 
/**
 *  for (start condition , end condition , step)
 */

for(var i = start; i<= end ; i+= step) {
    console.log(i);
}

// do while 



