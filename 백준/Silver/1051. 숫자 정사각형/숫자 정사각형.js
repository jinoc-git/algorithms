/**
 *
 * @param {number} N
 * @param {number} M
 * @param {number[][]} board
 */
const solution = (N, M, board) => {
  let max = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let k = 1; k <= Math.min(N - i, M - j); k++) {
        if (
          board[i][j] === board[i + k - 1][j] &&
          board[i][j] === board[i][j + k - 1] &&
          board[i][j] === board[i + k - 1][j + k - 1]
        ) {
          max = Math.max(max, k * k);
        }
      }
    }
  }

  return max;
};

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const board = input.map((v) => v.trim().split('').map(Number));

console.log(solution(N, M, board));