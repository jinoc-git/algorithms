const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const cases = input.slice(1).map(Number);

const MAX = 10000;
const dp = Array(MAX + 1).fill(0);

dp[0] = 1;

const nums = [1, 2, 3];

for (let num of nums) {
  for (let i = num; i <= MAX; i++) {
    dp[i] += dp[i - num];
  }
}

for (let n of cases) {
  console.log(dp[n]);
}