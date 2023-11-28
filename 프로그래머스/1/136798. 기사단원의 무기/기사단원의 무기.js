function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let count = 1 ;
        
        for (let n = 1; n <= i / 2; n++) {
            if (i % n === 0) count++;
            if (limit < count) {
                count = power;
                break;
            }
        }
        
        answer += count;
    }
    
    return answer;
}