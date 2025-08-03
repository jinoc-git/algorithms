const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const lottos = [];

let answer = '';

for (const numbers of input) {
  const [len, ...number] = numbers.split(' ').map(Number);
  if (len !== 0) {
    lottos.push({ len, number });
  }
}

const combi = (len, numbers) => {
  const resultCombi = [];
  const curCombi = [];

  const dfs = (start, count) => {
    if (count === 6) {
      resultCombi.push([...curCombi]);
      return;
    }

    for (let i = start; i < len; i++) {
      curCombi.push(numbers[i]);
      dfs(i + 1, count + 1);
      curCombi.pop();
    }
  };

  dfs(0, 0);

  resultCombi.forEach((com) => {
    answer += com.join(' ') + '\n';
  });

  answer += '\n';
};

for (const { len, number } of lottos) {
  combi(len, number);
}

console.log(answer.trim());
