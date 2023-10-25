function solution(numbers) {
    const allSum = new Set();
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            allSum.add(sum);
        }
    }
    
    const answer = [...allSum].sort((a, b) => a - b);

    return answer;
}