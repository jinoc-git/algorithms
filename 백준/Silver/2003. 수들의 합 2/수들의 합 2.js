function solution(input) {
  const [n, m] = input.trim().split('\n')[0].split(' ').map(Number);
  const array = input.trim().split('\n')[1].split(' ').map(Number);

  let count = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += array[j];

      if (sum === m) {
        count++;
      } else if (sum > m) {
        break;
      }
    }
  }
  return count;
}

const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input3.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));