function solution(sides) {
    let answer = 0;
    const maxNum = Math.max(...sides);
    const minNum = Math.min(...sides);
    const gap = maxNum - minNum;
    if (gap < 1) {
        answer = maxNum + minNum - 1;
    }
    if (gap === 1) {
        answer = minNum;
    } 
    if (gap > 1) {
        answer = minNum + minNum - 1;
    }
    
    return answer;
}