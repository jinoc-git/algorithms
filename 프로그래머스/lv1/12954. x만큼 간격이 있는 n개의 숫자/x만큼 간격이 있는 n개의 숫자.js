function solution(x, n) {
    let answer = [];
        
    for (let i = x; Math.abs(i) <= Math.abs(x * n); i += x) {
        if (answer.length === n) break;
        answer.push(i);
    }
    
    return answer;
}