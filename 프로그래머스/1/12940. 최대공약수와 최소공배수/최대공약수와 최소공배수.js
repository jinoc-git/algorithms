function solution(n, m) {
    let GCD = 1;
    let LCM = 1;
    let num = 2;
    
    while (num <= n || num <= m) {
        const isAliqOfN = n % num === 0;
        const isAliqOfM = m % num === 0;
        
        if (isAliqOfN && isAliqOfM) {
            GCD *= num;
            LCM *= num;
            n /= num;
            m /= num;
        }
        else num++;
    }
    
    LCM *= n * m;
    
    const answer = [GCD, LCM];
    
    return answer;
}