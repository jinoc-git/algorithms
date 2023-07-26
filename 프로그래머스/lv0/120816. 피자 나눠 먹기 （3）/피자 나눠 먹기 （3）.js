function solution(slice, n) {
    if (slice < 2 || slice > 10 || n < 1 || n > 100) return false;
    let answer = 1;
    let pizza;
    if (slice >= n) {
        answer = 1;
    } else {
        answer = Math.ceil(n / slice);
    }
    return answer;
}