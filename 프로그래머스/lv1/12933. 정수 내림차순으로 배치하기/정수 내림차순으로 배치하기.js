function solution(n) {
    let answer = 0;
    const num = String(n).split('').sort((a, b) => b - a).join('');
    
    answer = +num;
    
    return answer;
}