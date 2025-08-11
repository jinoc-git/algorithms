const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = parseInt(input.shift());
const works = [];

for (const work of input) works.push(work.split(' ').map(Number));

let maxProfit = 0;

const dfs = (index, curProfit) => {
  if (index > N - 1) {
    maxProfit = Math.max(maxProfit, curProfit);
    return;
  }

  const [days, profit] = works[index];
  if (index + days <= N) {
    dfs(index + days, curProfit + profit);
  }

  dfs(index + 1, curProfit);
};

dfs(0, 0);

console.log(maxProfit);