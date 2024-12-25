function solution(numbers, target) {
    let answer = 0;
    
    const dfsFunc = (index, sum) => {
        if (index === numbers.length) {
            if (sum === target) answer++;
            return;
        }
        
        dfsFunc(index + 1, sum + numbers[index]);
        dfsFunc(index + 1, sum - numbers[index]);
    }
    
    dfsFunc(0, 0);
    
    return answer;
}