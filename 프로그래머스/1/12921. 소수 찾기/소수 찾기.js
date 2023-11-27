function solution(n) {
    let answer = 0;
    const numbers = [false, false];
    
    for (let i = 2; i <= n; i++) {
        numbers.push(true);
    }    
    
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (numbers[i]) {
           for (let j = i * 2; j <= n; j += i) {
                numbers[j] = false;
            } 
        }
    }
    
    answer = numbers.filter((item) => item === true).length;
    
    return answer;
}