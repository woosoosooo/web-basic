const yoo = "yoo";

let jee = "jee";
jee = 1;

// console.log("My name is ${yoo}");
// console.log(`My name is ${yoo}`);

const a = "0";
const b = 0;
// console.log(a == b); // !=
// console.log(a === b);
// console.log(a !== b);

// a && b
// a || b

let flag = true;

const reuslt = flag ? "참이니" : "거짓이니";
// console.log(reuslt);

let name = "dong";

if (name === "yoo") {
  console.log("재희");
} else if (name === "jee") {
  console.log("지수");
} else {
  console.log("동섭");
}

// for & while
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// list / array
let numbers = [2, 3, 4, 5, 6]; // 0, 1, 2, 3, 4

// for (const n in numbers) {
//   console.log(n);
// }

// for (const number of numbers) {
//   console.log(number);
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// array
numbers = [2, 3, 4, 5, 6];

// object
const phoneBook = {
  yoo: 1234,
  jee: 3456,
  dong: 1245,
};

const phoneNumbers = [
  { name: "yoo", number: 1234 },
  { name: "jee", number: 3456 },
  { name: "dong", number: 1245 },
];

// console.log(phoneBook["yoo"]);
// console.log(phoneBook[0]);

// console.log(numbers[0]);

for (const pN of phoneNumbers) {
  console.log(`이름: ${pN.name}`);
  console.log(`번호: ${pN.number}`);
}

// const doubleNum = phoneNumbers.map((item) => console.log(item.number * 2));

const products = [
  { name: "cucumber", type: "vege" },
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "vege" },
  { name: "apple", type: "fruit" },
];

const fruits = products.filter((product) => product.type === "fruit");
console.log(fruits);

const fruit = products.find((product) => product.type === "fruit");
console.log(fruit);

const doubleNum = phoneNumbers.map((item) => console.log(item.number * 2));
const dN = phoneNumbers.reduce((tempNumbers, item) => {
  tempNumbers.push(item.number * 2);
  return tempNumbers;
}, []);
console.log(`dN: ${dN}`);
console.log(typeof dN);
