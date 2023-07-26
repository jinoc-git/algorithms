function solution(numbers) {
    let answer = 0;
    
    for(let i of numbers) {
        answer += i
    }
    
    return answer / numbers.length;
}