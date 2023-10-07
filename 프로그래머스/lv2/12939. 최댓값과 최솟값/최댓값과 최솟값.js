function solution(s) {
    let answer = '';
    
    const strArr = s.split(' ').map((str) => Number(str));
    const maxNum = Math.max(...strArr);
    const minNum = Math.min(...strArr);
    
    answer = `${minNum} ${maxNum}`;
    
    return answer;
}