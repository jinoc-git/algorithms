/**
 *
 * @param {number} N 사용할 수 있는 문자의 개수
 */
const solution = (N) => {
  const numbers = [1, 5, 10, 50];
  const maked = new Set();

  /**
   *
   * @param {number} depth 현재까지 선택한 문자의 개수
   * @param {number} sum 현재까지 선택한 문자들의 합
   * @param {number} start 현재 단계에서 선택을 시작할 numbers의 인덱스
   */
  const dfs = (depth, sum, start) => {
    if (depth === N) {
      maked.add(sum);
      return;
    }

    for (let i = start; i < 4; i++) {
      dfs(depth + 1, sum + numbers[i], i);
    }
  };

  dfs(0, 0, 0);

  return maked.size;
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
console.log(solution(N));