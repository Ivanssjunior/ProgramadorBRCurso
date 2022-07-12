
let p = document.getElementById("p1");

p.innerHTML = "New content";

p.innerText = "Newer content";

p.textContent = "Much newer content";


/*

let p = document.getElementById("p1");

p.innerHTML = "New content";

    >> innerHTML receive a HTML tag as the same way you just type
    p.innerHTML = "<h3>Theres a h3 inseide the p</h3>" returns all text, including HTML tags contained by an element. 


p.innerText = "Newer content";

    >>Returns all text in an elemnt and all childs elements. 

p.textContent = "Much newer content";

    >> Return all text contained by an element and all its children for formatting purposes only. 


*/ 