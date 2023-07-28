function solution(balls, share) {
    if (balls === share) return 1;
    const factorial = (n) => {
        if (n <= 1) return n;
        return n * factorial(n - 1);
    }
    const answer = factorial(balls) / (factorial(balls - share) * factorial(share))
    return Math.round(answer);
}