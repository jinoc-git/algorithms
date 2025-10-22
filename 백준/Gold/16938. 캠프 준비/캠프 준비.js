const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, L, R, X] = input[0].split(' ').map(Number); // 5 25 35 10
const difficulties = input[1].split(' ').map(Number);

let count = 0;

function solution(index, selected) {
  if (index === N) {
    if (selected.length >= 2) {
      const sum = selected.reduce((a, b) => a + b, 0);
      const max = Math.max(...selected);
      const min = Math.min(...selected);

      if (sum >= L && sum <= R && max - min >= X) {
        count++;
      }
    }
    return;
  }

  solution(index + 1, [...selected, difficulties[index]]);
  solution(index + 1, selected);
}
solution(0, []);
console.log(count);