function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    const sortedD = d.sort((a, b) => a - b);
    
    for (let i = 0; i < sortedD.length; i++) {
        const price = sortedD[i];
        
        const isOverPrice = sum + price > budget;
        if (isOverPrice) break;
        
        sum += price;
        answer += 1;
    }
    
    return answer;
}