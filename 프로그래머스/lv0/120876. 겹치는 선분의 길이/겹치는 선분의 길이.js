function solution(lines) {
    let answer = 0;
    const [first, second, third] = lines;
    
    const minDot = Math.min(first[0], second[0], third[0]);
    const maxDot = Math.max(first[1], second[1], third[1]);
    
    const baseLineMap = new Map();
    for (let dot = minDot; dot < maxDot; dot++) baseLineMap.set(dot, 0);

    lines.forEach(([start, end]) => {
        for (let i = start; i < end; i++) {
            const dot = baseLineMap.get(i);
            baseLineMap.set(i, dot + 1);
        }
    })

    baseLineMap.forEach((dot) => {
        if (dot > 1) answer++;
    })
    
    return answer;
}

