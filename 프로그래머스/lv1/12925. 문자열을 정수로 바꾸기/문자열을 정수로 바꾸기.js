function solution(s) {
    let answer = 0;
    
    if (s[0] === '-') {
        const n = s.split('-')[1];
        answer -= +n;
    } else {
        answer += +s;
    }   
    
    return answer;
}