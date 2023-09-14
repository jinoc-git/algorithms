function solution(n) {
    let answer = '';
    const half = Math.floor(n / 2)
    
    for (let i = 1; i <= half; i++) {
        answer += '수박';
    }
    
    if (n % 2 === 1) answer += '수';
    
    return answer;
}