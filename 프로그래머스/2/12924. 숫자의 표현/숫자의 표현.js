function solution(n) {
    let answer = 0; 
    
    for (let i = 1; i <= n; i++) {
        const isSubmultiple = n % i === 0; // 약수
        const isOdd = i % 2 === 1; // 홀수
        
        if (isSubmultiple && isOdd) answer++;
    }

    return answer;
}