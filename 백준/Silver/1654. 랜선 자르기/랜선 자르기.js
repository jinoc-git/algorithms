const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/**
 *
 * @param {number} K 랜선의 개수
 * @param {number} N 만들어야하는 최소 랜선 개수
 * @param {number[]} lines 갖고 있는 랜선의 길이
 */
const solution = (K, N, lines) => {
  let answer = 0;
  let min = 1;
  let max = Math.max(...lines);

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let count = 0;

    for (let line of lines) {
      count += Math.floor(line / mid);
      if (count >= N) break;
    }

    if (count >= N) {
      answer = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return answer;
};

const [K, N] = input.shift().split(' ').map(Number);
const lines = input.map(Number);
console.log(solution(K, N, lines));