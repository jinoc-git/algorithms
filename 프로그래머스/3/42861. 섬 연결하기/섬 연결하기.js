function solution(n, costs) {
    let answer = 0;
    const ascendingCosts = costs.sort((a, b) => a[2] - b[2]);
    const islandGroup = Array.from({length: n}, (_, i) => i);
    
    const getParentIsland = (islandId) => {
        if (islandGroup[islandId] === islandId) return islandId;
        
        islandGroup[islandId] = getParentIsland(islandGroup[islandId]);
        return islandGroup[islandId];
    }
    
    const joinGroup = (islandA, islandB) => {
        const parentA = getParentIsland(islandA);
        const parentB = getParentIsland(islandB);
        
        if (parentA !== parentB) {
            islandGroup[parentB] = parentA;
            return true;
        }
        return false;
    }
    
    let connectedBridge = 0;
    
    for (let [islandA, islandB, cost] of ascendingCosts) {
        if (joinGroup(islandA, islandB)) {
            answer += cost;
            connectedBridge++;
            
            if (connectedBridge === n - 1) break;
        }
    }
    
    return answer;
}