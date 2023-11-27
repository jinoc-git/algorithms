function solution(n) {
    let answer = 0;
    const numbers = new Array(n + 1).fill(true);
    
    numbers[0] = false;    
    numbers[1] = false;    
    
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