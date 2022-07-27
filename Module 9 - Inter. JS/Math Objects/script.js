let pi = Math.PI;
console.log(pi);

let n = Math.E;
console.log(n);

let a = Math.sqrt(16);
console.log(a);

let b = Math.pow(16, 3);
console.log(b);

let c = Math.round(Math.random() * 10);
console.log(c);

var button = document.getElementById("substract")
button.onclick = function () {
    var g = document.getElementById("mFirst").value
    var a = document.getElementById("mSecond").value
    var x = g - a;
    document.getElementById("mDemo").innerHTML = x;

}
