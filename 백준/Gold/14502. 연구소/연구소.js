/**
 *
 * @param {number} N
 * @param {number} M
 * @param {number[][]} lab
 * @returns
 */
const solution = (N, M, lab) => {
  const empty = [];
  const virus = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 0) empty.push([i, j]);
      if (lab[i][j] === 2) virus.push([i, j]);
    }
  }

  let maxSafe = 0;

  for (let i = 0; i < empty.length - 2; i++) {
    for (let j = i + 1; j < empty.length - 1; j++) {
      for (let k = j + 1; k < empty.length; k++) {
        const tempLab = lab.map((row) => row.slice());
        const [x1, y1] = empty[i];
        const [x2, y2] = empty[j];
        const [x3, y3] = empty[k];

        tempLab[x1][y1] = 1;
        tempLab[x2][y2] = 1;
        tempLab[x3][y3] = 1;

        const queue = virus.map((v) => [...v]);
        const dir = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ];

        while (queue.length > 0) {
          const [x, y] = queue.shift();

          for (const [dx, dy] of dir) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
              if (tempLab[nx][ny] === 0) {
                tempLab[nx][ny] = 2;
                queue.push([nx, ny]);
              }
            }
          }
        }

        let safeCount = 0;
        for (let a = 0; a < N; a++) {
          for (let b = 0; b < M; b++) {
            if (tempLab[a][b] === 0) safeCount++;
          }
        }

        maxSafe = Math.max(maxSafe, safeCount);
      }
    }
  }

  return maxSafe;
};

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
const lab = input.slice(1).map((line) => line.split(' ').map(Number));

console.log(solution(N, M, lab));
