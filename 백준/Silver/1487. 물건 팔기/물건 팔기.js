function solution(input) {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);  // 구매할 의향이 있는 사람의 수

  // 각 사람이 지불할 최대금액과 배송비
  const customers = [];
  for (let i = 1; i <= n; i++) {
    const [maxPrice, deliveryCost] = lines[i].split(' ').map(Number);
    customers.push({ maxPrice, deliveryCost });
  }

  // 후보 가격: 각 고객의 최대 지불 금액
  const candidatePrices = customers.map(c => c.maxPrice);

  let maxProfit = 0;
  let bestPrice = 0;

  // 각 후보 가격에 대해 이익 계산
  for (const price of candidatePrices) {
    let profit = 0;

    // 현재 가격에서 구매 가능한 고객들의 이익 합산
    for (const customer of customers) {
      // 고객이 구매 가능하고, 이익이 나는 경우만
      if (customer.maxPrice >= price) {
        const individualProfit = price - customer.deliveryCost;
        if (individualProfit > 0) {
          profit += individualProfit;
        }
      }
    }

    // 최대 이익 갱신 (이익이 같으면 더 낮은 가격 선택)
    if (profit > maxProfit || (profit === maxProfit && price < bestPrice)) {
      maxProfit = profit;
      bestPrice = price;
    }
  }

  return bestPrice;
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input3.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));