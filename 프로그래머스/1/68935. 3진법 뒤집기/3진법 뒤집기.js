function solution(n) {
    let answer = 0;
    let scale3 = '';
    
    while (n > 0) {
        const rest = n % 3;
        n = Math.floor(n / 3);
        scale3 = rest + scale3;
    }

    let count = 1;   
    for (let n of scale3) {
        answer += n * count;
        count *= 3;
    }
    
    return answer;
}