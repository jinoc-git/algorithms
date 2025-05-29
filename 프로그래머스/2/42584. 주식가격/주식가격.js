function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const stockIndex = stack.pop();
            answer[stockIndex] = i - stockIndex;
        }
        
        stack.push(i)
    }

    while (stack.length > 0) {
        const remainingStockIndex = stack.pop();
        answer[remainingStockIndex] = (prices.length - 1) - remainingStockIndex;
    }
    
    return answer;
}