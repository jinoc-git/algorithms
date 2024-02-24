function solution(players, callings) {
    const answer = [...players];
    const playerIdxList = {};
    
    for (let i = 0; i < answer.length; i++) {
        const player = answer[i];
        playerIdxList[player] = i;
    }
    
    for (let i = 0; i < callings.length; i++) {
        const calling = callings[i];
        const playerIdx = playerIdxList[calling];
        const forwardPlayer = answer[playerIdx - 1];
        
        answer[playerIdx - 1] = calling;
        answer[playerIdx] = forwardPlayer;
        
        playerIdxList[calling] = playerIdx - 1;
        playerIdxList[forwardPlayer] = playerIdx;
    }
    
    return answer;
}