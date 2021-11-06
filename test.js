console.log("test");

const data1 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  console.log("res", res);
  const obj = await res.json();
  console.log("fffff", obj);
  const keys = Object.keys(obj);
  console.log(keys);
};
data1();
// const dataGet = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/3")
//     .then((response) => response.json())
//     .then(data);
// };

// console.log(data);
let str = "ffgkg";
const palindrome = (str) => {
  str = str.toLowerCase();
};
