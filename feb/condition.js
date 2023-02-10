var unit = 250; // This is Given
var bill = 0;

if (unit <= 100) {
  bill = unit * 10;
}

//167
else if (unit <= 200) {
  var extraThan100 = unit - 100; // 67
  bill = extraThan100 * 15 + 100 * 10; // 167 * 15
} else if (unit <= 300) {
  var extraThan200 = unit - 200; // 50
  bill = extraThan200 * 20 + 100 * 15 + 100 * 10;
} else {
  var extraThan300 = unit - 300;
  bill = extraThan300 * 25 + 100 * 20 + 100 * 15 + 100 * 10;
}

console.log(bill);

// You need to tell electricity bill
