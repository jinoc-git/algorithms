function solution(n, wires) {
    let answer = 98;
    const treeMap = new Map();
    
    for (let i = 1; i <= n; i++) treeMap.set(i, []);
    
    wires.forEach(([v1, v2]) => {
        treeMap.get(v1).push(v2);
        treeMap.get(v2).push(v1);
    });
    
    const excludeWire = (startPoint, excludeWire) => {
        let count = 0;
        const visited = new Array(n + 1).fill(false);
        visited[startPoint] = true;
        const ways = [startPoint];
        
        while (ways.length) {
            const currentPoint = ways.shift();
            count++;

            treeMap.get(currentPoint).forEach((point) => {
                const isExcludeWire = (currentPoint === excludeWire[0] && point === excludeWire[1]) || (currentPoint === excludeWire[1] && point === excludeWire[0]);
                if (isExcludeWire) return;
                if (visited[point] !== true) {
                    visited[point] = true;
                    ways.push(point);
                }
            });
        }
        
        return count;
    }
    
    wires.forEach(([v1, v2]) => {
        const firstCount = excludeWire(v1, [v1, v2]);
        const secondCount = n - firstCount;
        const gap = Math.abs(firstCount - secondCount);
        answer = Math.min(answer, gap);
    });
    
    return answer;
}