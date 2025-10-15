const solution = (N, friends) => {
  let maxCount = 0;
  
  for (let i = 0; i < N; i++) {
    const visited = Array(N).fill(false);
      
    for (let j = 0; j < N; j++) {
      if (i === j) continue; 

      if (friends[i][j] === 'Y') visited[j] = true;
      else {
        for (let k = 0; k < N; k++) {
          if (friends[i][k] === 'Y' && friends[k][j] === 'Y') {
            visited[j] = true;
            break;
          }
        }
      }
    }

    const count = visited.filter(Boolean).length;
    maxCount = Math.max(maxCount, count);
  }
   
  return maxCount;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const friends = input.slice(1).map((line) => line.split(''));
console.log(solution(N, friends))