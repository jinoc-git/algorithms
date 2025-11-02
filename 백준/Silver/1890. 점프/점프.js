/**
 *
 * @param {number} N 게임 판의 크기
 * @param {number[][]} board 게임 판의 구성
 * @returns
 */
const solution = (N, board) => {
  const dp = Array.from({ length: N }, () => new Array(N).fill(0n));
  dp[0][0] = 1n;

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (r === N - 1 && c === N - 1) continue;

      const currentPath = dp[r][c];
      if (currentPath === 0n) continue;

      const move = board[r][c];
      const nr = r + move;
      if (nr < N) dp[nr][c] += currentPath;

      const nc = c + move;
      if (nc < N) dp[r][nc] += currentPath;
    }
  }

  return dp.at(-1).at(-1).toString();
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input2.txt');
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input.shift());
const board = input.map((v) => v.split(' ').map(Number));
console.log(solution(N, board));