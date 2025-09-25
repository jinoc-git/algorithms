const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
/**
 *
 * @param {number} N 학생 수
 * @param {string[][]} students 학생의 이름과 점수 이중 배열
 */
const solution = (N, students) => {
  students.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1]; // 국어 점수 내림차순
    if (a[2] !== b[2]) return a[2] - b[2]; // 국어 점수 같으면 영어 점수 오름차 순
    if (a[3] !== b[3]) return b[3] - a[3]; // 국어 영어 같으면 수학 점수 내림차 순
    if (a[0] < b[0]) return -1; // 모든 점수 같으면 이름 사전순 증가 순
    return 0;
  });

  let answer = '';
  for (const [name, ...scores] of students) {
    answer += name + '\n';
  }

  return answer;
};

const N = parseInt(input.shift());
const students = input.map((v) => {
  const [name, ...scores] = v.trim().split(' ');
  return [name, ...scores.map(Number)];
});
console.log(solution(N, students));