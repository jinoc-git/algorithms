function solution(x) {
    if (x < 11) return true;
    
    let answer = true;
    
    const num = String(x).split('').reduce((acc, cur) => acc += +cur, 0);
    
    if (x % num !== 0) answer = false;
    
    return answer;
}