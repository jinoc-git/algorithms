function solution(lottos, win_nums) {
    const rank = { 0: 6, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1};
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