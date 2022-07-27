let a = {
    name: "Ivan", 
    age: 24

}

console.log(a);

let b = JSON.stringify(a);

console.log(b);

let a2 = '{"name":"Junior", "age":25}';

console.log(a2);

let b2 = JSON.parse(a2)

console.log(b2);

