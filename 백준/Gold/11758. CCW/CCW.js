/**
 * CCW 공식이 있음
 * @param {[number, number]} p1
 * @param {[number, number]} p2
 * @param {[number, number]} p3
 */
const solution = ([x1, y1], [x2, y2], [x3, y3]) => {
  // 1. P1을 원점으로 평행이동하여 벡터를 정의
  // Vector A: (x2 - x1, y2 - y1)
  // Vector B: (x3 - x1, y3 - y1)

  // 외적의 z 성분 C = Ax * By - Ay * Bx
  // C = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1)
  const ccw = x1 * y2 + x2 * y3 + x3 * y1 - (y1 * x2 + y2 * x3 + y3 * x1);
  if (ccw > 0) return 1;
  if (ccw < 0) return -1;
  return 0;
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input1.txt');
const input = fs.readFileSync(filePath).toString('utf8').trim().split('\n');

const [p1, p2, p3] = input.map((v) => v.trim().split(' ').map(Number));
console.log(solution(p1, p2, p3));