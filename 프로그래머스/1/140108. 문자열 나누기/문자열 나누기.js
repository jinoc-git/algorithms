function solution(s) {
    let answer = 0;
    let originStr = '';
    let originCount = 0;
    let etcCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        
        if (originStr === '') originStr = str;
        
        if (originStr === str) originCount++;
        else etcCount++;
        
        if (originCount !== etcCount && i === s.length - 1) answer++;

        if (originCount === etcCount) {
            answer++;
            originStr = '';
            originCount = 0;
            etcCount = 0;
        }
    }
    
    return answer;
}