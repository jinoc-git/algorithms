function solution(n) {
    let answer = 1; 
    const half = n / 2;
    
    for (let i = 1; i <= half; i++) {
        let sum = 0;
        
        for (let j = i; sum < n; j++) {
            sum += j;
        }
        
        if (sum === n) answer++
    }

    return answer;
}