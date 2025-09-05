function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [from, to] of edge) {
        graph[from].push(to);
        graph[to].push(from);
    }
    
    const history = Array.from({ length: n + 1 }, () => ({ distance: -1, visited: false }));
    
    const queue = [[1, 0]];
    history[1].distance = 0;
    history[1].visited = true;
    
    let front = 0;
    let maxDistance = 0;
    
    while (front < queue.length) {
        const [curNode, curDistance] = queue[front];
        front++;

        if (curNode > maxDistance) maxDistance = curDistance;
        
        for (const neighbor of graph[curNode]) {
            if (history[neighbor].visited === false) {
                history[neighbor].visited = true;
                history[neighbor].distance = curDistance + 1;
                queue.push([neighbor, curDistance + 1]);
            }
        }
    }
    
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (history[i].distance === maxDistance) answer++;
    }
    
    return answer;
}