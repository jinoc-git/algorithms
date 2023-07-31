function solution(sides) {
    let answer = 0;
    const maxNum = Math.max(...sides);
    const minNum = Math.min(...sides);
    if (maxNum - minNum === 1) {
        answer = minNum;
    } else {
        answer = minNum + minNum - 1;
    }
    
    return answer;
}