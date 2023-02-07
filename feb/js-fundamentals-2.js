console.log("Hello world");

var n = 26; 
var b = n % 7 ; 
// b = 1
/**
 *  b = 0 Sunday 
 *  b = 1 Monday
 *  b = 2 Tuesday
 */

//  if (b == 0) {
//    console.log("Sunday");
//  } else if (b == 1) {
//    console.log("Monday");
//  } else if (b == 2) {
//    console.log("Tuesday");
//  } else if (b == 3) {
//    console.log("Wednesday");
//  } else if (b == 4) {
//    console.log("Thursday");
//  } else if (b == 5) {
//    console.log("Friday");
//  } else if (b == 6) {
//    console.log("Saturday");
//  }

 //numbers or booleans
 switch (b) {
   case 0: {
     console.log("Sunday");
     break;
   }
   case 1: {
     console.log("Monday");
     break;
   }
   case 2: {
     console.log("Tuesday");
     break;
   }
   case 3: {
     console.log("Wednesday");
     break;
   }
   case 4: {
     console.log("Thu");
     break;
   }
   case 5: {
     console.log("Fri");
     break;
   }
   case 6: {
     console.log("Sat");
     break;
   }

   case 'default': {
     console.log("Invalid");
   }
 }