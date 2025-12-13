/**
 * 전체 조각 수 -1이 최소 쪼개기 횟수
 * @param {number} N
 * @param {number} M
 */
const solution = (N, M) => {
  return N * M - 1;
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input1.txt');
const input = fs.readFileSync(filePath).toString('utf8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
console.log(solution(N, M));