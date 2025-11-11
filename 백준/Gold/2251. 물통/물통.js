/**
 *
 * @param {number} A
 * @param {number} B
 * @param {number} C
 */
const solution = (A, B, C) => {
  const answer = new Set();
  const visited = Array.from({ length: A + 1 }, () =>
    new Array(B + 1).fill(false)
  );

  const maxWater = [A, B, C];
  const queue = [[0, 0, C]];
  visited[0][0] = true;
  let idx = 0;

  while (idx < queue.length) {
    const [a, b, c] = queue[idx++];
    if (a === 0) answer.add(c);

    const curWater = [a, b, c];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === j) continue;

        const from = curWater[i];
        const to = curWater[j];
        const maxTo = maxWater[j];
        if (from === 0) continue;

        const canMoveWater = maxTo - to;
        const realMoveWater = Math.min(from, canMoveWater);
        if (realMoveWater <= 0) continue;

        const newWater = [...curWater];
        newWater[i] -= realMoveWater;
        newWater[j] += realMoveWater;

        const [newA, newB, newC] = newWater;
        if (!visited[newA][newB]) {
          visited[newA][newB] = true;
          queue.push(newWater);
        }
      }
    }
  }

  return Array.from(answer)
    .sort((a, b) => a - b)
    .join(' ');
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input2.txt');
const input = fs.readFileSync(filePath).toString('utf8').trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);
console.log(solution(A, B, C));