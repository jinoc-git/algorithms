function solution(n, results) {
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
    
    for (const [winner, loser] of results) graph[winner][loser] = true;
    
    for (let mid = 1; mid <= n; mid++) {
        for (let winner = 1; winner <= n; winner++) {
            for (let loser = 1; loser <= n; loser++) {
                const inferResult =graph[winner][mid] && graph[mid][loser];
                if (inferResult) graph[winner][loser] = true;
            }
        }
    }
    
    let answer = 0;
    
    for (let player = 1; player <= n; player++) {
        let knowMatchResult = 0;
        for (let other = 1; other <= n; other++) {
            if (player === other) continue;
            
            const playerWin = graph[player][other];
            const otherWin = graph[other][player];
            if (playerWin || otherWin) knowMatchResult++;
        }
        
        if (knowMatchResult === n - 1) answer++;
    }
    
    return answer;
}