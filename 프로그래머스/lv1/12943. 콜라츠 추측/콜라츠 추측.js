function solution(num) {
    let answer = 0;
    
    while (true) {
        if (answer === 500 || num === 1) break;
        
        answer++;
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        
    } 
    
    if (answer === 500) return -1;
    return answer;
}