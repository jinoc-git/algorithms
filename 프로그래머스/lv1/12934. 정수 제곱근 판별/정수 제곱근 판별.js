function solution(n) {
    let answer = -1;
    const x = Math.floor(Math.sqrt(n));
    const x2 = Math.sqrt(n)
    
    if (x === x2) {
        answer = (x + 1) * (x + 1);
    }
    
    return answer;
}