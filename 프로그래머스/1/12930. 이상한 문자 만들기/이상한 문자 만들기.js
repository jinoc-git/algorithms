function solution(s) {
    let answer = '';
    let strLengthCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        if (str === ' ') {
            answer += ' ';
            strLengthCount = 0;
            continue;
        }
        
        const isOdd = strLengthCount % 2 === 1;
        if (isOdd) answer += str.toLowerCase();
        else answer += str.toUpperCase();
        strLengthCount++;
    }
    
    return answer;
}