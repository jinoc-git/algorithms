/**
 *
 * @param {number} N 구해야 하는 N번째 피보나치 수
 */
const solution = (N) => {
  const fibo = new Array(N + 1).fill(0n); // 피보나치 수를 저장할 배열
  fibo[1] = 1n; // 1번째 피보나치 수는 1

  // 0번째 피보나치 수는 0, 1번째는 1이므로 2번째 수부터 계산
  for (let i = 2; i <= N; i++) {
    const before1 = fibo[i - 2];
    const before2 = fibo[i - 1];
    const current = before1 + before2;
    fibo[i] = current;
  }

  return fibo[N].toString();
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input3.txt');
const input = fs.readFileSync(filePath).toString('utf8').trim().split('\n');

const N = parseInt(input[0]);
console.log(solution(N));
