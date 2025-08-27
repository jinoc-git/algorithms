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
  const ascendingTimes = times.sort((a, b) => a - b);

  let answer = 0;
  for (let i = 0; i < N; i++) {
    answer += ascendingTimes[i];
    for (let j = 0; j < i; j++) {
      answer += ascendingTimes[j];
    }
  }

  return answer;
};

const N = parseInt(input.shift());
const times = input[0].split(' ').map(Number);
console.log(solution(N, times));