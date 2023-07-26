function solution(n) {
    var answer = 0;
    if (n % 7 == 0) {
        answer = n / 7;
    } else {
        answer = 1 + Math.floor(n / 7)
    }
    return answer;
}