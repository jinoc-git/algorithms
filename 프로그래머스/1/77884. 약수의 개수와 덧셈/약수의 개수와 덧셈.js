function solution(left, right) {
    let answer = 0;
    
    for (let n = left; n <= right; n++) {
        let aliquotCount = 0;
        for (let num = 1; num <= Math.ceil(n / 2); num++) {
            if (n % num === 0) aliquotCount++;
        }

        if (n !== 1) aliquotCount++;

        if (aliquotCount % 2 === 0) answer += n;
        else answer -= n;
        
    }
    
    return answer;
}