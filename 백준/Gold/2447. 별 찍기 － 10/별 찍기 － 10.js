function solution(input) {
  const N = Number(input);
  const array = Array.from({length: N}, () => Array(N).fill(' '));  // 공백으로 초기화 -> 나중에 별만 찍으면됨

  const fillStars = (arr, row, col, size) => {
    // size가 1일때 별하나 찍기
    if (size === 1) {
      arr[row][col] = '*';
      return;
    }

    const newSize = size / 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // 가운데(1, 1)는 공백으로 남김
        if (i === 1 && j === 1) {
          continue;
        }

        // 작은 구역들의 시작 좌표 계산
        const newRow = row + i * newSize;
        const newCol = col + j * newSize;

        fillStars(arr, newRow, newCol, newSize)  // 재귀 호출
      }
    }
  }
  fillStars(array, 0, 0, N);

  return array.map(row => row.join('')).join('\n');  // 2차원 배열을 문자열로 변환
}


// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();

console.log(solution(input));