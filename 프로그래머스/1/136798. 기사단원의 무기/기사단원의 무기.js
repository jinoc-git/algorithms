function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let count = 0;
        
        for (let n = 1; n * n <= i; n++) {
            if (n * n === i) count++ ;
            else if (i % n === 0) count += 2;
            
            if (limit < count) {
                count = power;
                break;
            }
        }
        
        answer += count;
    }
    
    return answer;
}