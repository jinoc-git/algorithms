function solution(maps) {
    const xMax = maps[0].length;
    const yMax = maps.length;
    const goX = [1, -1, 0, 0];
    const goY = [0, 0, 1, -1];
    
    const visited = [[0, 0, 1]];
    maps[0][0] = 0;
    
    while (visited.length) {
        const [y, x, count] = visited.shift();
        
        for (let i = 0; i < 4; i++) {
            const nextX = x + goX[i];
            const nextY = y + goY[i];
            if (nextX === xMax - 1 && nextY === yMax - 1) return count + 1;
            
            const canX = nextX >= 0 && nextX < xMax;
            const canY = nextY >= 0 && nextY < yMax;
            
            if (canX && canY && maps[nextY][nextX] === 1) {
                maps[nextY][nextX] = 0;
                visited.push([nextY, nextX, count + 1]);
            }
        }
    }
    
    return -1;
}