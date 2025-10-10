function solution(input) {
  const lines = input.trim().split('\n');
  const [M, N] = lines[0].split(' ').map(Number);
  const grid = [];

  for (let i = 1; i <= M; i++) {
    grid.push(lines[i].split('').map(Number));
  }

  const visited = Array.from({ length: M }, () => Array(N).fill(false));
  const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const dfs = (row, col) => {
    if (row === M - 1) return true;

    visited[row][col] = true;

    for (const [x, y] of move) {
      const newRow = row + x;
      const newCol = col + y;

      if (newRow < 0 || newCol < 0 || newCol >= N) continue;
      if (visited[newRow][newCol] || grid[newRow][newCol] === 1) continue;
        
      if (dfs(newRow, newCol)) return true;
    }

    return false;
  }

  for (let col = 0; col < N; col++) {
    if (grid[0][col] === 0 && !visited[0][col]) {
      if (dfs(0, col)) {
        return "YES";
      }
    }
  }
  return "NO";
}

const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();

console.log(solution(input));