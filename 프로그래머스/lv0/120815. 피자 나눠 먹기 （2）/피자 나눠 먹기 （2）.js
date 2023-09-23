function solution(n) {
    let answer = 0;
    let sum = 0;
    
    for (let i = 1; i <= 50; i++) {
        sum += 6;
        answer++;
        if (sum % n === 0) break;
    }
    
    return answer;
}