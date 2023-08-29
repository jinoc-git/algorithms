function solution(n) {
    let answer = (n + '').split('').reverse().map((num) => +num);
    
    return answer;
}