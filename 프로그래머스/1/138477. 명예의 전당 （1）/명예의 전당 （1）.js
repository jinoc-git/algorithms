function solution(k, score) {
    const answer = [];
    const HallOfFame = [];

    for (let i = 0; i < score.length; i++) {
        const todayScore = score[i];
        HallOfFame.push(todayScore);
        HallOfFame.sort((a, b) => a - b);
        
        if (k <= i) HallOfFame.shift();
        
        answer.push(HallOfFame[0]);
    }
    
    return answer;
}