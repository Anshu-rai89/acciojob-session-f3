var d = 100;

function outer(b) {
  var c = 0;
  var d = 100;
  var eg = 120;
  var inner = function () {
    c++;
    console.log(c);
  };

  /**
    * Whenever you return a function which is consuming a variable
    * from its parent function javascript will return a object 
    * which will have two thing 
    *  {
    *    inner : function () {
            return c + 90;,
         ref : of variable c , ref of variable b;
        }
    * }
    */
  return inner;
}

/**
 * function () {
    return c + 90;
   }
 */
//console.log(c);
var s = outer(100);

// Here will c be present in memory
s();
s();
