function solution(dots) {
    let answer = 0;
    const x = dots.map((dot) => dot[0]).sort((a, b) => a - b < 0 ? -1 : 1);
    const y = dots.map((dot) => dot[1]).sort((a, b) => a - b < 0 ? -1 : 1);

    const row = x[3] - x[0];
    const column = y[3] - y[0];
    answer = row * column;
    
    return answer;
}