function solution(a, b) {
    if (a === b) return a;
    
    let answer = 0;
    const gap = Math.abs(a - b);
    const half = Math.floor(gap / 2);
    const min = Math.min(a, b)
    
    if (gap % 2 === 0) {
        answer = (a + b) * (half) + (min + half);
    } else {
        answer = (a + b) * (half + 1);
    }
    
    return answer;
}