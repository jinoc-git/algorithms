function solution(input) {
  const lines = input.trim().split('\n');
  const [r, c] = lines[0].split(' ').map(Number);
  const board = [];

  for (let i = 0; i < r; i++) {
    const row = lines[i + 1].split('');
    board.push(row);
  }

  const dy = [0, 1, 0, -1]
  const dx = [1, 0, -1, 0]

  for (let y = 0; y < r; y++) {
    for (let x = 0; x < c; x++) {
      if (board[y][x] === 'W') {
        for  (let dir = 0; dir < 4; dir++) {
          const ny = y + dy[dir];
          const nx = x + dx[dir];
          if (ny < 0 || ny >= r || nx < 0 || nx >= c) continue;

          if (board[ny][nx] === 'S') return '0';

          if (board[ny][nx] === '.') {
            board[ny][nx] = 'D';
          }
        }
      }
    }
  }

  // 모든 늑대의 위치에서 BFS 시작, 양에게 도달 가능한지 검증
  const queue = [];
  const visited = Array.from({ length: r }, () => Array(c).fill(false));

  // 모든 늑대 위치를 큐에 추가
  for (let y = 0; y < r; y++) {
    for (let x = 0; x < c; x++) {
      if (board[y][x] === 'W') {
        queue.push([y, x]);
        visited[y][x] = true;
      }
    }
  }

  let idx = 0;
  while (idx < queue.length) {
    const [y, x] = queue[idx++];

    for (let dir = 0; dir < 4; dir++) {
      const ny = y + dy[dir];
      const nx = x + dx[dir];
      if (ny < 0 || ny >= r || nx < 0 || nx >= c) continue;
      if (visited[ny][nx] || board[ny][nx] === 'D') continue;
        
      if (board[ny][nx] === 'S') return '0';

      visited[ny][nx] = true;
      queue.push([ny, nx]);
    }
  }

  let result = '1\n';
  for (let i = 0; i < r; i++) {
    result += board[i].join('') + '\n';
  }
    
  return result;
}

const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input3.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));