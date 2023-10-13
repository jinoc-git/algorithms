function solution(n, m) {
    const answer = [];
    let GCD = 1;
    let LCM = 1;
    const limit = n > m ? n / 2 : m / 2;
    let num = 2;
    
    const shouldDivide = num <= limit;
    while (shouldDivide) {
        if (num > n || num > m) break;
        
        const isAliqOfN = n % num === 0;
        const isAliqOfM = m % num === 0;
        
        if (isAliqOfN && isAliqOfM) {
            GCD *= num;
            LCM *= num;
            n = n / num;
            m = m / num;
        }
        else num++;
    }
    
    LCM *= n * m;
    
    answer.push(GCD);
    answer.push(LCM);
    
    return answer;
}