const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;

/**
 *
 * @param {number} depth 현재 탐색 중인 배열의 인덱스
 * @param {number} sum 현재까지 탐색한 부분수열의 합
 * @returns
 */
const dfs = (depth, sum) => {
  // 끝까지 탐색했다면 종료
  if (depth === N) {
    // 현재까지의 합이 S와 같은지 확인
    if (sum === S) {
      count++; // 같으면 count++
    }
    return;
  }

  // 현재 원소를 포함하는 경우
  dfs(depth + 1, sum + arr[depth]);

  // 현재 원소를 포함하지 않는 경우
  dfs(depth + 1, sum);
};

// 0번째 인덱스, 합 0으로 시작
dfs(0, 0);

// 만약 목표 합(S)이 0이라면 아무것도 선택하지 않은 경우도 카운트되므로 1을 빼줘야 함
// 첫 탐색은 이루어지기에 count가 늘어남
if (S === 0) {
  count--;
}

console.log(count);