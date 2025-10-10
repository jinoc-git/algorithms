function solution(input) {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const board = lines.slice(1);

  let visited = Array(n).fill().map(() => Array(m).fill(false));  //
  let count = 0;

  const dfs = (x, y) => {
    visited[x][y] = true; 
    const current = board[x][y];

    if (current === '-') {
      if (y + 1 < m && !visited[x][y + 1] && board[x][y + 1] === '-') {
        dfs(x, y + 1);
      }
    }
    else {
      if (x + 1 < n && !visited[x + 1][y] && board[x + 1][y] === '|')  {
        dfs(x + 1, y);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }
  return count;
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();

console.log(solution(input));