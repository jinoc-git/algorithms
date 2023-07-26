function solution(numbers) {
    let answer = 0;
    const num = numbers.length;
    for (let i = 0; i < num - 1; i++) {
        for (let j = i + 1; j < num; j++) {
            let result = numbers[i] * numbers[j]
            if (result > answer) {
                answer = result;
            } else {
                continue;
            }
        }
    }
    return answer;
}