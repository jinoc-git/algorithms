const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input[0];
let splitNumber = N.split("");

function solution() {
  if (!splitNumber.includes("0")) return -1;

  let sum = splitNumber.reduce((a, b) => a + Number(b), 0);
  if (sum % 3 !== 0) return -1;

  return splitNumber.sort((a, b) => b - a).join("");
}

console.log(solution());