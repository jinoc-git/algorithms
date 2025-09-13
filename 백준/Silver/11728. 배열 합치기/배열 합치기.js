const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
/**
 *
 * @param {number} N
 * @param {number} M
 * @param {number[]} A
 * @param {number[]} B
 * @returns
 */
const solution = (N, M, A, B) => {
  return A.concat(B).sort((a, b) => a - b).join(' ');
};

const [N, M] = input.shift().split(' ').map(Number);
const A = input.shift().split(' ').map(Number);
const B = input.shift().split(' ').map(Number);
console.log(solution(N, M, A, B));