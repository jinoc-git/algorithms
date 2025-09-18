const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/**
 *
 * @param {number} N 종이의 한 변의 크기
 * @param {number[][]} paper 종이의 구성
 */
const solution = (N, paper) => {
  let minusOneCount = 0;
  let zeroCount = 0;
  let oneCount = 0;

  /**
   * 종이가 어떤 원소로 이루어져 있는지 분류하는 함수
   * @param {number[][]} paper 분류할 종이
   */
  const classficationPaper = (paper) => {
    const value = paper[0][0];
    switch (value) {
      case -1:
        minusOneCount++;
        break;
      case 0:
        zeroCount++;
        break;
      case 1:
        oneCount++;
        break;
    }
  };

  /**
   * 모든 종이의 원소가 같은 수로 이루어져 있는지 확인하는 함수
   * @param {number[][]} paper 확인할 종이
   * @returns {boolean}
   */
  const checkSameNumbers = (paper) => {
    let first = paper[0][0];
    for (const row of paper) {
      for (const num of row) {
        if (first !== num) return false;
      }
    }

    return true;
  };

  /**
   * 종이를 확인하며 자르는 함수
   * @param {number[][]} paper
   */
  const checkPaper = (paper) => {
    const isSameNumbers = checkSameNumbers(paper);
    if (isSameNumbers) {
      classficationPaper(paper);
      return;
    }

    for (let r = 0; r < paper.length; r += paper.length / 3) {
      for (let c = 0; c < paper.length; c += paper.length / 3) {
        const slicedPaper = paper
          .slice(r, r + paper.length / 3)
          .map((v) => v.slice(c, c + paper.length / 3));

        checkPaper(slicedPaper);
      }
    }
  };

  checkPaper(paper);

  let answer = '';
  answer += minusOneCount.toString() + '\n';
  answer += zeroCount.toString() + '\n';
  answer += oneCount.toString();

  return answer;
};

const N = parseInt(input.shift());
const paper = input.map((v) => v.split(' ').map(Number));
console.log(solution(N, paper));