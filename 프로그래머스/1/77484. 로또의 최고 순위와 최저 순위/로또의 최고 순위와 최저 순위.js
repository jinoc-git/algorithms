function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    const knownNum = lottos.filter((num) => num !== 0);
    let matchNum = 0;
    
    win_nums.forEach((num) => {
        for (let i = 0; i < knownNum.length; i++) {
            if (num === knownNum[i]) matchNum++;
        }
    })

    const bestRank = rank[matchNum + 6 - knownNum.length];
    const worstRank = rank[matchNum];
          
    const answer = [bestRank, worstRank];
    
    return answer;
}