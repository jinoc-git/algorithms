/**
 *
 * @param {number} H 모눈종이의 세로
 * @param {number} W 모눈종이의 가로
 * @param {number} N 스티커의 개수
 * @param {number[]} stickers 스티커의 크기
 */
const solution = (H, W, N, stickers) => {
  let max = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const [r1, c1] = stickers[i];
      const [r2, c2] = stickers[j];
      const area = r1 * c1 + r2 * c2;

      const rotations = [
        [r1, c1, r2, c2],
        [r1, c1, c2, r2],
        [c1, r1, r2, c2],
        [c1, r1, c2, r2],
      ];

      for (const [row1, col1, row2, col2] of rotations) {
        if (col1 + col2 <= W && Math.max(row1, row2) <= H) {
          max = Math.max(max, area);
        }

        if (row1 + row2 <= H && Math.max(col1, col2) <= W) {
          max = Math.max(max, area);
        }
      }
    }
  }

  return max;
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, '..', 'input.txt');
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const N = parseInt(input[1]);
const stickers = input.slice(2).map((v) => v.trim().split(' ').map(Number));
console.log(solution(H, W, N, stickers));