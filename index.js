// 1
for (let i = 2; i < 8; i++) {
  console.log(i);
}

// 2
for (let i = 5; i <= 35; i += 4) {
  console.log(i);
}

// 3
for (let i = 3; i <= 8; i++) {
  console.log(i * i);
}

// 4
let person = {
  firstName: "Tornike",
  lastName: "Peitrishvili",
  age: 21,
};

console.log(person.firstName + " " + person.lastName);

// 5
for (const key in person) {
  console.log(person[key]);
}

// 6
let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 7
fruits.unshift("Grapes");
fruits.push("Pineapples");
console.log(fruits);

// 8
let sum = 0;
let i = 1;

while (sum + i <= 100 && i <= 34) {
  sum += i;
  console.log(sum);
  i++;
}

// davaleba-9
