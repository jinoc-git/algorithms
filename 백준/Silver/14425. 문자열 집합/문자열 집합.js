/**
 *
 * @param {number} N 문자열 집합 S에 포함된 문자열 개수
 * @param {number} M 테스트할 문자열의 개수
 * @param {string[]} S 문자열 집합
 * @param {string[]} testStrings 테스트할 문자열들
 * @returns
 */
const solution = (N, M, S, testStrings) => {
  const originStrings = new Set(S);
  let count = 0;

  for (let str of testStrings) {
    if (originStrings.has(str)) count++;
  }

  return count;
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input1.txt');
const input = fs.readFileSync(filePath).toString('utf8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const S = input.slice(1, N + 1).map((v) => v.trim());
const testStrings = input.slice(1 + N).map((v) => v.trim());
console.log(solution(N, M, S, testStrings));