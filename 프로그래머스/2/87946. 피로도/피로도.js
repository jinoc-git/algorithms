function solution(k, dungeons) {
    let answer = 0;
    const visited = Array(dungeons.length).fill(false);
    
    const adventure = (curK, count) => {        
        for (let i = 0; i < dungeons.length; i++) {
            const curDungeon = dungeons[i];
            if (curK >= curDungeon[0] && !visited[i]) {
                visited[i] = true;
                adventure(curK - curDungeon[1], count + 1);
                
                visited[i] = false;
            }
        }
        
        answer = Math.max(answer, count);
    }
    
    adventure(k, 0);
    
    return answer;
}