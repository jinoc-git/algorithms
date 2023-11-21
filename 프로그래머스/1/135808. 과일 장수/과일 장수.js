function solution(k, m, score) {
    let answer = 0;
    const boxs = Math.floor(score.length / m);
    const sortedScore = score.sort((a, b) => b - a);
    
    for (let i = m - 1; i <= boxs * m; i += m) {
        answer += sortedScore[i] * m;
    }
    
    return answer;
}