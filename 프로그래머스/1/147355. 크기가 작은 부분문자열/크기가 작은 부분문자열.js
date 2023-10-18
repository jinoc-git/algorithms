function solution(t, p) {
    let answer = 0;
    const range = t.length - p.length;
    
    for (let i = 0; i <= range; i++) {
        const check = t.slice(i, i + p.length);
        
        const isSmall = Number(check) <= Number(p);
        if (isSmall) answer++;
    }
    
    return answer;
}