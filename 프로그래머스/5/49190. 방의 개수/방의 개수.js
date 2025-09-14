function solution(arrows) {
    // 8방향 이동 벡터 (시계방향)
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const dy = [1, 1, 0, -1, -1, -1, 0, 1];
    
    // 방문한 점과 간선을 저장할 Set
    const visitedNodes = new Set();
    const visitedEdges = new Set();
    
    let x = 0;
    let y = 0;
    let rooms = 0;
    
    // 시작점 추가
    visitedNodes.add(`${x},${y}`);
    
    for (let arrow of arrows) {
        // 대각선 이동의 경우 교차점 처리를 위해 2단계로 분할
        for (let step = 0; step < 2; step++) {
            const nx = x + dx[arrow] * 0.5;
            const ny = y + dy[arrow] * 0.5;
            
            const currentNode = `${x},${y}`;
            const nextNode = `${nx},${ny}`;
            
            // 간선 키 생성 (양방향이므로 정렬)
            const edgeKey = currentNode < nextNode ? 
                `${currentNode}-${nextNode}` : 
                `${nextNode}-${currentNode}`;
            
            // 다음 점이 이미 방문했고, 간선이 새로운 경우 방 생성
            if (visitedNodes.has(nextNode) && !visitedEdges.has(edgeKey)) {
                rooms++;
            }
            
            // 현재 상태 업데이트
            visitedNodes.add(nextNode);
            visitedEdges.add(edgeKey);
            
            x = nx;
            y = ny;
        }
    }
    
    return rooms;
}