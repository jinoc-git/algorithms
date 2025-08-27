const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/**
 *
 * @param {number} N 사람 수
 * @param {number[]} times 각 사람들이 인출할 때 걸리는 시간들
 */
const solution = (N, times) => {
  const ascendingTimes = times
    .map((v, idx) => [v, idx])
    .sort((a, b) => a[0] - b[0]);

  let answer = 0;
  for (let i = 0; i < N; i++) {
    answer += ascendingTimes[i][0];
    for (let j = 0; j < i; j++) {
      answer += ascendingTimes[j][0];
    }
  }

  return answer;
};

const N = parseInt(input.shift());
const times = input[0].split(' ').map(Number);
console.log(solution(N, times));