const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/**
 * 파이프의 머리 부분만 생각하기
 * @param {number} N 방의 크기
 * @param {strimg[][]} room 방의 구조
 */
const solution = (N, room) => {
  let answer = 0;

  const canMoveRight = (row, col) => {
    return col + 1 < N && room[row][col + 1] === 0;
  };
  const canMoveDown = (row, col) => {
    return row + 1 < N && room[row + 1][col] === 0;
  };
  const canMoveDiagonal = (row, col) => {
    return (
      row + 1 < N &&
      col + 1 < N &&
      room[row][col + 1] === 0 &&
      room[row + 1][col] === 0 &&
      room[row + 1][col + 1] === 0
    );
  };

  /**
   *
   * @param {number} row 파이프 머리의 row 위치
   * @param {number} col 파이프 머리의 col 위치
   * @param {'가로'| '세로' | '대각선'} state 가로, 세로, 대각선
   */
  const dfs = (row, col, state) => {
    if (row === N - 1 && col === N - 1) {
      answer++;
      return;
    }

    if (state === '가로') {
      if (canMoveRight(row, col)) dfs(row, col + 1, '가로');
      if (canMoveDiagonal(row, col)) dfs(row + 1, col + 1, '대각선');
    } else if (state === '세로') {
      if (canMoveDown(row, col)) dfs(row + 1, col, '세로');
      if (canMoveDiagonal(row, col)) dfs(row + 1, col + 1, '대각선');
    } else if (state === '대각선') {
      if (canMoveRight(row, col)) dfs(row, col + 1, '가로');
      if (canMoveDown(row, col)) dfs(row + 1, col, '세로');
      if (canMoveDiagonal(row, col)) dfs(row + 1, col + 1, '대각선');
    }
  };

  dfs(0, 1, '가로');

  return answer;
};

const N = parseInt(input.shift());
const room = input.map((v) => v.trim().split(' ').map(Number));
console.log(solution(N, room));