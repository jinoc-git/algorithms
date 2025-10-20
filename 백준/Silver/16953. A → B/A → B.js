const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/**
 * 역순 변환
 * @param {string} A
 * @param {string} B
 */
const solution = (A, B) => {
  let count = 1;

  while (+B > +A) {
    if (B.endsWith('1')) {
      B = B.slice(0, -1);
      count++;
    } else if (+B % 2 === 0) {
      B = String(B / 2);
      count++;
    } else {
      count = -1;
      break;
    }
  }

  if (B !== A) return -1;

  return count;
};

const [A, B] = input[0].split(' ');
console.log(solution(A, B));