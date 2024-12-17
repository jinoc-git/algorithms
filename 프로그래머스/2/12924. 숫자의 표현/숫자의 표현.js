function solution(n) {
    let answer = 0; 
    
    for (let i = 1; i <= n; i++) {
        const isAliquot = n % i === 0; // 약수
        const isOdd = i % 2 === 1; // 홀수
        
        if (isAliquot && isOdd) answer++;
    }

    return answer;
}