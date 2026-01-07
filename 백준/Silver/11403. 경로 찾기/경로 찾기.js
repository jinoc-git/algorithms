function solution(input) {
  const lines= input.trim().split('\n');
  const n = parseInt(lines[0]);  // 정점의 개수 n

  // 인접 행렬 생성 
  const graph = [];
  for (let i = 1; i <= n; i++) {
    graph.push(lines[i].split(' ').map(Number));
  }

  // 플로이드-워셜 구현
  // k: 거쳐가는 정점
  for (let k = 0; k < n; k++) {
    // i: 시작 정점
    for (let i = 0; i < n; i++) {
      // j: 도착 정점
      for (let j = 0; j < n; j++) {
        // i -> k 가능하고 k -> j 가능하면
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          // i -> j 도 가능
          graph[i][j] = 1;
        }
      }
    }
  }

  let result = '';
  for (let i = 0; i < n; i++) {
    result += graph[i].join(' ') + '\n';
  }
  return result.trim();
}


// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input3.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));