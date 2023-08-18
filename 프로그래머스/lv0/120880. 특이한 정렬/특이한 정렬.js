function solution(numlist, n) {
    let answer = numlist.sort((a, b) => {
        if (Math.abs(n - a) - Math.abs(n - b) > 0) {
            return 1
        }
        if (Math.abs(n - a) - Math.abs(n - b) < 0) {
            return -1
        }
        if (Math.abs(n - a) - Math.abs(n - b) === 0) {
            return b - a > 0 ? 1 : -1
        }
    });

    return answer;
}


