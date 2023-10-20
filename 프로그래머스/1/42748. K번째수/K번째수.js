function solution(array, commands) {
    const answer = [];
    
    commands.forEach(([i, j, k]) => {
        const rangeArr = array.slice(i - 1, j);
        const sortedArr = rangeArr.sort((a, b) => a - b);
        const result = sortedArr[k - 1];
        answer.push(result);
    })
    
    return answer;
}