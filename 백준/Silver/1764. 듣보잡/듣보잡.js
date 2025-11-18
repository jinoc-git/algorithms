/**
 *
 * @param {number} N 듣도 못한 사람의 수
 * @param {number} M 보도 못한 사람의 수
 * @param {string[]} noListen 듣도 못한 사람들의 이름
 * @param {string[]} noSee 보도 못한 사람들의 이름
 */
const solution = (N, M, noListen, noSee) => {
  const noListenSet = new Set(noListen);
  const noListenSee = [];

  for (let name of noSee) {
    if (noListenSet.has(name)) noListenSee.push(name);
  }

  noListenSee.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  noListenSee.unshift(noListenSee.length);

  return noListenSee.join('\n');
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, '..', 'input.txt');
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const noListen = input.slice(1, N + 1).map((v) => v.trim());
const noSee = input.slice(N + 1).map((v) => v.trim());
console.log(solution(N, M, noListen, noSee));