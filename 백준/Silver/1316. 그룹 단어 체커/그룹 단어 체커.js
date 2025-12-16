function solution(input) {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);   // 단어의 개수 n

  let count = 0;

  // 각 단어에 대해 그룹 단어인지 검사
  for (let i = 1; i <= n; i++) {
    const word = lines[i];

    // 나온 문자를 Set에 저장
    const seen = new Set();
    let isGroupWord = true;

    // 첫 문자 처리
    seen.add(word[0]);

    // 두번째 문자부터 검사
    for (let j = 1; j < word.length; j++) {
      const current = word[j];
      const prev = word[j - 1];

      // 이전 문자와 다른 경우
      if (current !== prev) {
        // 이미 등장했던 문자면 그룹 단어 아님
        if (seen.has(current)) {
          isGroupWord = false;
          break;
        }

        // 처음 등장하는 문자면 Set에 추가
        seen.add(current);
      }
    }

    if (isGroupWord) {
      count++;
    }
  }
  return count;
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input1.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));