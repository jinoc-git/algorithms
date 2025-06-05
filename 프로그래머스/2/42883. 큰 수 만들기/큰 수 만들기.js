function solution(number, k) {
    let answer = '';
    const numbers = [];
    let deleteCount = k;
    
    for (let num of number) {        
        while (numbers.length && deleteCount && numbers.at(-1) < num) {
            numbers.pop();
            deleteCount--;
        }

        numbers.push(num);
    }
    
    while (deleteCount) {
        numbers.pop();
        deleteCount--;
    }
    
    answer = numbers.join('')
    
    return answer;
}