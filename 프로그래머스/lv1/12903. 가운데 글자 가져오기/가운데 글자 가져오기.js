function solution(s) {
    const length = s.length;
    const half = Math.floor(length / 2);
    let answer = '';
    
    if (length % 2 === 0 ) {
        answer = s[half - 1] + s[half];
    } else {
        answer = s[half];
    }
    
    return answer;
}