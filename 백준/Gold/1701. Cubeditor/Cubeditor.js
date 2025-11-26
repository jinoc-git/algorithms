function solution(input) {
  const str = input.trim();
  const n = str.length;

  let left = 0;
  let right = str.length;
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const seen = new Set();
    let found = false;

    for (let i = 0; i <= n - mid; i++) {
      const substr = str.substring(i, i + mid);
      if (seen.has(substr)) {
        found = true;
        break;
      }
      seen.add(substr);
    }

    if (found) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input3.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));
