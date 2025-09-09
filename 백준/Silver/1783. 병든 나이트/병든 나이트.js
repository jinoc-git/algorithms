const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/**
 * 나이트는 오른쪽으로만 이동, 가로 세로 어느 쪽이 길던 긴 쪽을 가로로 생각
 * @param {number} N
 * @param {number} M
 */
const solution = (N, M) => {
  let count = 0;

  if (N === 1) count = 1;
  else if (N === 2) {
    const min = 4;
    const calc = Math.floor((M + 1) / 2);
    count = Math.min(min, calc);
  } else {
    if (M < 7) count = Math.min(4, M);
    else count = M - 2;
  }

  return count;
};

const [N, M] = input[0].split(' ').map(Number);
console.log(solution(N, M));