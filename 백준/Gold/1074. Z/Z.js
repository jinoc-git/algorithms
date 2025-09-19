const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/**
 * 찾고자 하는 위치가 사분면으로 나눴을 때 어디 위치하는지 파악
 * @param {number} N
 * @param {number} r 행
 * @param {number} c 열
 */
const solution = (N, r, c) => {
  const countBlock = (n, r, c) => {
    if (n === 0) return 0;

    const half = Math.pow(2, n - 1);
    const blockCount = half * half;

    const isTopLeft = r < half && c < half;
    if (isTopLeft) return countBlock(n - 1, r, c);

    const isTopRight = r < half && c >= half;
    if (isTopRight) return blockCount + countBlock(n - 1, r, c - half);

    const isBottomLeft = r >= half && c < half;
    if (isBottomLeft) return blockCount * 2 + countBlock(n - 1, r - half, c);

    return blockCount * 3 + countBlock(n - 1, r - half, c - half);
  };

  const answer = countBlock(N, r, c);

  return answer;
};

const [N, r, c] = input[0].split(' ').map(Number);
console.log(solution(N, r, c));