var btnPlus = document.querySelectorAll(".plus");
console.log(btnPlus);

var btnMoins = document.querySelectorAll(".moins");
console.log(btnMoins);

var btnFav = document.querySelectorAll(".fav");
console.log(btnFav);

var btnDelete = document.querySelectorAll(".delete");
console.log(btnDelete);

var btnTotal = document.querySelectorAll(".total");
console.log(btnTotal);

// for ( var btn of btnPlus) {
//     btn.addEventListener("")
// }

for (var btn of btnFav) {
  btn.addEventListener("click", function (e) {
    var color = e.target.style.backgroundColor;
    if (color == "") {
      e.target.style.backgroundColor = "red";
    } else {
      e.target.style.backgroundColor = "";
    }
  });
}

for (var btn of btnDelete) {
  btn.addEventListener("click", function (e) {
    var div = e.target.parentNode.parentNode;
    div.parentNode.removeChild(div);
  });
}

for (var btn of btnPlus) {
  btn.addEventListener("click", function (e) {
    var div = e.target.parentNode;
    var qty = div.querySelector(".quantité");
    console.log(qty);
    qty.innerHTML = parseFloat(qty.innerHTML) + 1;
    var total = document.querySelector(".total");
    var prix = div.querySelector(".prix");
    total.innerHTML = parseFloat(total.innerHTML) + parseFloat(prix.innerHTML);
  });
}

for (var btn of btnMoins) {
  btn.addEventListener("click", function (e) {
    var div = e.target.parentNode;
    var qty = div.querySelector(".quantité");
    var total = document.querySelector(".total");
    var prix = div.querySelector(".prix");
    if (qty.innerHTML > 0) {
      qty.innerHTML = parseFloat(qty.innerHTML) - 1;
      total.innerHTML =
        parseFloat(total.innerHTML) - parseFloat(prix.innerHTML);
    }
    console.log(qty);
  });
}

for (var btn of btnDelete) {
  btn.addEventListener("click", function (e) {
    var div = e.target.parentNode.parentNode;
    var qty = div.querySelector(".quantité");
    var total = document.querySelector(".total");
    var prix = div.querySelector(".prix");

    total.innerHTML =
      parseFloat(total.innerHTML) -
      parseFloat(prix.innerHTML) * parseFloat(qty.innerHTML);
    console.log(qty);
    div.parentNode.removeChild(div);
  });
}
