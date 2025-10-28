/**
 *
 * @param {number} N 아이스크림의 개수
 * @param {number} M 섞어 먹으면 안 되는 조합의 개수
 * @param {number[][]} icecreams 섞어 먹으면 안되는 조합
 */
const solution = (N, M, icecreams) => {
  const badTaste = new Map();
  for (const [a, b] of icecreams) {
    if (!badTaste.has(a)) badTaste.set(a, new Set());
    if (!badTaste.has(b)) badTaste.set(b, new Set());
    badTaste.get(a).add(b);
    badTaste.get(b).add(a);
  }

  let count = 0;

  for (let i = 1; i <= N - 2; i++) {
    for (let j = i + 1; j <= N - 1; j++) {
      if (badTaste.get(i) && badTaste.get(i).has(j)) continue;

      for (let k = j + 1; k <= N; k++) {
        if (badTaste.get(i) && badTaste.get(i).has(k)) continue;
        if (badTaste.get(j) && badTaste.get(j).has(k)) continue;
        count++;
      }
    }
  }

  return count;
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const icecreams = input.map((v) => v.trim().split(' ').map(Number));
console.log(solution(N, M, icecreams));