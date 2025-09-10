function solution(input) {
  const lines = input.trim().split('\n')
  const N = parseInt(lines[0]);
  const heights = lines[1].split(' ').map(Number);

  const heightCount = new Map();
  heights.forEach(height => {
      heightCount.set(height, (heightCount.get(height) || 0) + 1);
  });

  let maxParticipants = 0;
  heightCount.forEach(count => {
      maxParticipants += Math.min(count, 2);
  });

  return maxParticipants;

}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

console.log(solution(input));