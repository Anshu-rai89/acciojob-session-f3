

class Square {
    constructor (_area) {
        console.log("Creating object");
        const size = Math.sqrt(_area);
        this.height = size;
        this.width = size;
    }
  
    //Getters 
    get area() {
        return this.height * this.width;
    }

    get parameter() {
        return 4 * this.height;
    }

    //Functions
    logSq() {
        console.log(`I am square with height as ${this.height} and width as ${this.width}`);
    }

   // Setters
   set area(newArea) {
        const size = Math.sqrt(newArea);
        this.height = size;
        this.width = size;
    }

    static isEqual (sq1,sq2) {
        return sq1.area === sq2.area;
    }

}

const sq = new Square(100);
const area = sq.area;
const parameter = sq.parameter;

sq.logSq();
console.log("Get Area", area);
console.log("Get Parameter", parameter);
sq.area = 400;
sq.logSq();

console.log(sq.area,sq.parameter);

const sq1 = new Square(400);
const sq2 = new Square(400);

const isEqual = Square.isEqual(sq1,sq2);
console.log("Is equal",isEqual);
/**
 *  Sq1 -> 400
 *  Sq2 -> 200
 */


var now = new Date();
var time = now.getTime();
var expireTime = time + 1000 * 36000;
now.setTime(expireTime);
document.cookie = "cookie=ok;expires=" + now.toUTCString() + ";path=/";