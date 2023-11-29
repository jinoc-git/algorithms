function solution(n, m, section) {
    if (m === 1) return section.length;
    
    let answer = 0;
    let rePaint = 0;
    
    section.forEach((wallNum) => {
        if (rePaint < wallNum) {
            rePaint = wallNum + m - 1;
            answer++;
        }
    })
    
    return answer;
}