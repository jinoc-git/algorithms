function solution(dots) {
    let answer = 0;
    const x = dots.map((dot) => dot[0]).sort();
    const y = dots.map((dot) => dot[1]).sort();
    
    const row = Math.abs(x[3] - x[0]);
    const column = Math.abs(y[3] - y[0]);
    answer = row * column;
    
    return answer;
}