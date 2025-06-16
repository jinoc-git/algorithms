function solution(m, n, puddles) {
    let answer = 0;
    
    const raw = 1_000_000_007;
    // const ways = new Array(n + 1).fill(new Array(m + 1).fill(0));
    const ways = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    const traps = new Set();
    puddles.forEach(([x, y]) => traps.add(`${y},${x}`));
    
    ways[1][1] = 1;

    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= m; x++) {
            const isTrap = traps.has(`${y},${x}`);
            if (isTrap) {
                ways[y][x] = 0;
                continue;
            }
            
            const isHome = x === 1 && y === 1;
            if (isHome) continue;
            
            const topToDownWayCount = ways[y - 1][x];
            const leftToRightWayCount = ways[y][x - 1];
            ways[y][x] = (topToDownWayCount + leftToRightWayCount) % raw;
        }
    }

    answer = ways.at(-1).at(-1);
    
    return answer;
}