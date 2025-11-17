/**
 *
 * @param {number} N 직원 수
 * @param {[string, string]} log 직원 이름과 출입 기록
 */
const solution = (N, log) => {
  const working = new Set();

  for (const [name, record] of log) {
    if (record === 'enter') working.add(name);
    else working.delete(name);
  }

  const workingArr = Array.from(working).sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  return workingArr.join('\n');
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, '..', 'input.txt');
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const log = input.slice(1).map((v) => v.trim().split(' '));
console.log(solution(N, log));