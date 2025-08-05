const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const S = parseInt(input[0]);
const numbers = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const maxSum = numbers.reduce((acc, cur) => (acc += cur), 0);
const allNumber = Array.from({ length: maxSum }, () => false);

/**
 *
 * @param {number} depth 현재 탐색 중인 배열의 인덱스
 * @param {number} sum 현재까지 탐색한 부분수열의 합
 * @returns
 */
const dfs = (depth, sum) => {
  if (depth === S) {
    if (sum !== 0) {
      allNumber[sum - 1] = true;
    }
    return;
  }

  dfs(depth + 1, sum + numbers[depth]);

  dfs(depth + 1, sum);
};

dfs(0, 0);

const minNumIndex = allNumber.findIndex((val) => val === false);
if (minNumIndex === -1) {
  console.log(maxSum + 1);
} else {
  console.log(minNumIndex + 1);
}