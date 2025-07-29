const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number);

const calc = (a, b, operatorIndex) => {
  switch (operatorIndex) {
    case 0: // 덧셈
      return a + b;
    case 1: // 뺄셈
      return a - b;
    case 2: // 곱셈
      return a * b;
    case 3: // 나눗셈
      // a가 음수면 양수로 전환 후 소숫점 버리고 음수로 전환
      return ~~(a / b)
  }
};

const solution = (n, numbers, operatorsArr) => {
  // 초기값 설정
  let max = -Infinity;
  let min = Infinity;

  const dfs = (numIdx, curResult, op) => {
    // 종료 조건
    if (numIdx === n) {
      max = Math.max(max, curResult); // 최댓값 계산
      min = Math.min(min, curResult); // 최솟값 계산
      return;
    }

    // 연산자 순회 (+, -, *, /) 순서
    for (let i = 0; i < 4; i++) {
      // 연산자가 남아있을 경우
      if (op[i] > 0) {
        op[i] -= 1; // 연산자 사용 -> 연산자 수 감소

        const nextResult = calc(curResult, numbers[numIdx], i); // 계산 결과
        dfs(numIdx + 1, nextResult, op); // 재귀 호출

        op[i] += 1; // 백트레킹 -> 사용한 연산자 수 복구
      }
    }
  };

  dfs(1, numbers[0], operatorsArr); // dfs 실행

  console.log(max);
  console.log(min);
};

solution(n, numbers, operators);