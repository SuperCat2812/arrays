let mass1 = [1, 2, 3];
mass1.push(4, 5, 6);
mass1.unshift(4, 5, 6);
console.log(mass1);
let mass2 = [1, 2, 3, 4, 5];
let a;
a = mass2.slice(0, 3);
a = mass2.slice(3);
console.log(a);

let mass3 = ['js', 'css', 'jq'];
let b;
b = mass3.slice(0, 1);
console.log(b);
b = alert(b)
b = mass3.slice(2);
console.log(b);
b = alert(b)