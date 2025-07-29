const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

const N = parseInt(input.shift());
const field = [];
for (let line of input) {
  field.push(line.split(' ').map(Number));
}

let minDiff = Infinity; // 최소 능력치 차이를 저장할 변수

// 백트래킹 함수
// index: 현재 탐색 중인 팀원의 인덱스
// startTeam: 스타트 팀에 속한 팀원들의 인덱스 배열
// linkTeam: 링크 팀에 속한 팀원들의 인덱스 배열
const solution = (idx, startTeam, linkTeam) => {
  // 1. 종료 조건: 모든 팀원을 배정했을 때
  if (idx === N) {
    // 두 팀의 인원수가 N/2로 같아야 유효한 팀 조합입니다.
    if (startTeam.length === N / 2 && linkTeam.length === N / 2) {
      let startScore = 0;
      let linkScore = 0;

      // 스타트 팀 능력치 계산
      for (let i = 0; i < startTeam.length; i++) {
        for (let j = i + 1; j < startTeam.length; j++) {
          startScore += field[startTeam[i]][startTeam[j]];
          startScore += field[startTeam[j]][startTeam[i]];
        }
      }

      // 링크 팀 능력치 계산
      for (let i = 0; i < linkTeam.length; i++) {
        for (let j = i + 1; j < linkTeam.length; j++) {
          linkScore += field[linkTeam[i]][linkTeam[j]];
          linkScore += field[linkTeam[j]][linkTeam[i]];
        }
      }

      // 능력치 차이 계산 및 최소값 업데이트
      minDiff = Math.min(minDiff, Math.abs(startScore - linkScore));
    }
    return;
  }

  // 2. 재귀 호출: 현재 팀원을 스타트 팀에 추가
  // 스타트 팀의 인원수가 N/2를 초과하지 않도록 합니다.
  if (startTeam.length < N / 2) {
    startTeam.push(idx);
    solution(idx + 1, startTeam, linkTeam);
    startTeam.pop(); // 백트래킹: 다음 탐색을 위해 추가했던 팀원 제거
  }

  // 3. 재귀 호출: 현재 팀원을 링크 팀에 추가
  // 링크 팀의 인원수가 N/2를 초과하지 않도록 합니다.
  if (linkTeam.length < N / 2) {
    linkTeam.push(idx);
    solution(idx + 1, startTeam, linkTeam);
    linkTeam.pop(); // 백트래킹: 다음 탐색을 위해 추가했던 팀원 제거
  }
};

solution(0, [], []);

console.log(minDiff);
