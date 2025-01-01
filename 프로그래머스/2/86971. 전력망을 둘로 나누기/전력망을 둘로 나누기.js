function solution(n, wires) {
    let answer = 100;
    const nodes = {};
    
    wires.forEach(([v1, v2]) => {
        if (!nodes[v1]) nodes[v1] = [];
        if (!nodes[v2]) nodes[v2] = [];
        
        nodes[v1].push(v2);
        nodes[v2].push(v1);
    });

    const connection = (start, excluded) => {
        let count = 0;
        const way = [start];
        const visited = [];
        
        while (way.length) {
            const current = way.shift();
            visited[current] = true;
            count++;

            nodes[current].forEach((point) => {
                if (!visited[point] && point !== excluded) way.push(point);
            })
        }
        
        return count;
    }
    
    wires.forEach(([v1, v2]) => {
        const gap = Math.abs(connection(v1, v2) - connection(v2, v1));
        answer = Math.min(answer, gap);
    });
    
    
    return answer;
}