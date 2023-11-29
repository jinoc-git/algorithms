function solution(n, m, section) {
    if (m === 1) return section.length;
    
    let answer = 1;
    let rePaint = section[0] + m - 1;
    
    section.forEach((wallNum) => {
        if (wallNum <= rePaint) return;
        
        rePaint = wallNum + m - 1;
        answer++;
    })
    
    return answer;
}