function solution(s) {
    let answer = false;
    const checkLength = s.length === 4 || s.length === 6;
    const isOnlyNumber = s.split('').filter((v) => isNaN(+v)).length === 0;
    
    if (checkLength && isOnlyNumber) answer = true;
    
    return answer;
}