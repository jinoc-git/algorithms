function solution(m, n, puddles) {
    const MOD = 1_000_000_007;
    const ways = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    puddles.forEach(([x, y]) => ways[y][x] = -1);
    
    ways[1][1] = 1;

    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= m; x++) {
            const isTrap = ways[y][x] === -1;
            if (isTrap) continue;      
            const isHome = x === 1 && y === 1;
            if (isHome) continue;
            
            const topToDownWayCount = ways[y - 1][x] !== -1 ? ways[y - 1][x] : 0;
            const leftToRightWayCount = ways[y][x - 1] !== -1 ? ways[y][x - 1] : 0;
            ways[y][x] = (topToDownWayCount + leftToRightWayCount) % MOD;
        }
    }
    
    return ways.at(-1).at(-1);
}