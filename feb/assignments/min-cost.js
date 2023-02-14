function minCostToFormRope(a) {
  a.preventDefault();
  var inputElement = document.querySelector("input").value;
  var arr = inputElement.split(",");
  arr.sort(function (a, b) {
    return a - b;
  });

  // we need to access first two element
  // add them & store in a variable res

  // add the res in array
  // increment cost by res
  var cost = 0;
  while (arr.length > 1) {
    var res = Number(arr[0]) + Number(arr[1]);
    arr.splice(0, 2);

    arr.push(res);
    cost += res;

    arr.sort(function (a, b) {
      return a - b;
    });
  }

  document.getElementById("result").textContent = cost;
}
