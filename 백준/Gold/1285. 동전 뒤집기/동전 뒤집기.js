const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/**
 *
 * @param {number} N 한 행 또는 한 열의 놓인 동전의 수
 * @param {string[]} coins 동전의 초기 상태 배열
 */
const solution = (N, coins) => {
  let minT = Infinity;

  for (let i = 0; i < 1 << N; i++) {
    let curTotalT = 0;
    for (let col = 0; col < N; col++) {
      let curColT = 0;
      for (let row = 0; row < N; row++) {
        let curCoin = coins[row][col];

        if ((i & (1 << row)) !== 0) {
          curCoin = curCoin === 'H' ? 'T' : 'H';
        }

        if (curCoin === 'T') curColT++;
      }

      curTotalT += Math.min(curColT, N - curColT);
    }
    minT = Math.min(minT, curTotalT);
  }

  return minT;
};

const N = parseInt(input.shift());
const coins = input.map((v) => v.trim());
console.log(solution(N, coins));