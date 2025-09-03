function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);
    const ascendingRocks = [0, ...rocks, distance];
    
    let answer = 0;
    let low = 1;
    let high = distance;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let removeRockCount = 0;
        let position = 0;
        
        for (let i = 1; i < ascendingRocks.length; i++) {
            const curRock = ascendingRocks.at(i);
            const gap = curRock - position;
            
            if (gap < mid) removeRockCount++;
            else position = curRock;
        }
        
        if (removeRockCount <= n) {
            answer = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    
    return answer;
}