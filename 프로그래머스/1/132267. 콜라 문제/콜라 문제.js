function solution(a, b, n) {
    let answer = 0;
    
    for (let i = 0; a <= n; i++) {
        const exchange = Math.floor(n / a) * b;
        const rest = n % a;
        n = exchange + rest;
        answer += exchange;
    }
    
    return answer;
}