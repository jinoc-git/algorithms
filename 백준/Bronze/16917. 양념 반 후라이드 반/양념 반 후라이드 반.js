/**
 *
 * @param {number} A 양념 한 마리 가격
 * @param {number} B 후라이드 한 마리 가격
 * @param {number} C 반반 한 마리 가격
 * @param {number} X 구매할 양념의 최소 마리
 * @param {number} Y 구매할 후라이드의 최소 마리
 */
const solution = (A, B, C, X, Y) => {
  let cost = X * A + Y * B;

  const banban = Math.min(X, Y);
  let banbanCost = 2 * banban * C;
  const restRed = X - banban;
  const restFride = Y - banban;

  banbanCost += restRed * Math.min(A, 2 * C);
  banbanCost += restFride * Math.min(B, 2 * C);

  cost = Math.min(cost, banbanCost);

  return cost;
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, '..', 'input.txt');
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [A, B, C, X, Y] = input[0].split(' ').map(Number);
console.log(solution(A, B, C, X, Y));