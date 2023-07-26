function solution(num1, num2) {
    var answer = (num1 - (num1 % num2)) / num2;
    return answer;
}