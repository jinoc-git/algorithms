function solution(s) {
    const answer = [];
    const stringList = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        const forward = stringList.get(str);
        
        if (forward !== undefined) {
            answer.push(i - forward);
            stringList.set(str, i);
        } else {
            answer.push(-1);
            stringList.set(str, i);
        }
    }
    
    return answer;
}