function solution(dots) {
    let answer = 0;
    
    dots.forEach(([x, y], idx) => {
        for (let i = 1; i < 4 - idx; i++) {
            const nextIdx = idx + i;
            const nextXDot = dots[nextIdx][0];
            const nextYDot = dots[nextIdx][1];
            const xGap = x - nextXDot;
            const yGap = y - nextYDot;
            const angle = yGap / xGap;

            const indexs = [0, 1, 2, 3].filter((v) => v !== nextIdx && v !== idx);
            const anotherXGap = dots[indexs[0]][0] - dots[indexs[1]][0];
            const anotherYGap = dots[indexs[0]][1] - dots[indexs[1]][1];
            const anotherAngle = anotherYGap / anotherXGap;
            
            if (angle === anotherAngle) answer = 1;
        }
    })
    
    return answer;
}