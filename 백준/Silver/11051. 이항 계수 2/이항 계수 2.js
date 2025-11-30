/**
 * 이항 계수 = 순서를 고려하지 않고 N개의 서로 다른 원소 중에서 K개를 선택하는 경우의 수
 * @param {number} N 자연수
 * @param {number} K 정수
 */
const solution = (N, K) => {
  const dp = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));

  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) dp[i][j] = 1;
      else {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % 10_007;
      }
    }
  }

  return dp[N][K];
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input2.txt');
const input = fs.readFileSync(filePath).toString('utf8').trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
console.log(solution(N, K));