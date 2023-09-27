function solution(num, total) {
    const answer = [];
    const plusNum = Array(num).fill(num).reduce((acc, _, idx) => acc += idx, 0);
    const firstNum = (total - plusNum) / num;
    
    for (let n = firstNum; n < firstNum + num; n++) answer.push(n);
    
    return answer;
}