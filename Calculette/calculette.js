var btnCalc = document.querySelectorAll(".btn");
console.log(btnCalc);

var btnEqual = document.querySelectorAll(".btnEqual");
console.log(btnEqual);

var btnC = document.querySelectorAll(".btnC");
console.log(btnC);

for (var btn of btnCalc) {
  btn.addEventListener("click", function (e) {
    var res = document.querySelector(".result");
    console.log(res);
    if (res.innerHTML == "error") {
      res.innerHTML = e.target.innerHTML;
    } else {
      res.innerHTML = res.innerHTML + e.target.innerHTML;
    }
  });
}

var btnEqual = document.querySelector(".btnEqual");
btnEqual.addEventListener("click", function (e) {
  var res = document.querySelector(".result");
  try {
    res.innerHTML = eval(res.innerHTML);
  } catch (error) {
    res.innerHTML = "error";
  }
  console.log(res);
});

var btnC = document.querySelector(".btnC");
btnC.addEventListener("click", function (e) {
  var res = document.querySelector(".result");
  res.innerHTML = "";
});
