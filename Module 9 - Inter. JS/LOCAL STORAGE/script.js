onload = function () {

    let name = localStorage.getItem("name");
    let h1 = this.document.getElementById("name");
    h1.innerHTML = name;
}


function refresh(element) {
    let type = element.value;

    console.log(type)

    let h1 = document.getElementById("name");
    h1.innerHTML = type;

    localStorage.setItem("name", type);
}