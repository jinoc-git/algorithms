function solution(input) {
  const board = input.trim().split('\n').map(line => line.split(' ').map(Number));

  const result = new Set();

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(x, y, depth, number) {
    if (depth === 6) {
      result.add(number);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        dfs(nx, ny, depth +1, number + board[nx][ny]);
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      dfs(i, j, 1, String(board[i][j]));
    }
  }

  return result.size;
}

const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));