function solution(n) {
    let answer = 0;
    const nums = new Map();

    for (let i = 2; i <= n; i++) {
        nums.set(i, i);
    }
    for (let i = 2; i <= n; i++) {
        if (!nums.get(i)) {
            continue;
        }
        for (let j = i * 2; j <= n; j += i) {
            nums.delete(j);
        }
    }
    
    const primeNumbers = Array.from(nums.keys()).length;
    answer = n - primeNumbers - 1;
    
    return answer;
}