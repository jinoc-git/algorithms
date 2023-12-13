function solution(keymap, targets) {
    const answer = [];
    const pressCount = new Map();
    
    targets.forEach((target) => {
        let totalPressCount = 0;
        
        for (let str of target) {
            const strPressCount = pressCount.get(str);
            
            if (strPressCount) totalPressCount += strPressCount;
            else {
                const pressCountList = keymap.map((key) => {
                    const count = key.indexOf(str) + 1;
                    return count;
                }).filter((count) => count !== 0);
                
                if (pressCountList.length === 0) {
                    totalPressCount = -1;
                    break;
                }
                
                const minimumCount = Math.min(...pressCountList);
                pressCount.set(str, minimumCount);
                totalPressCount += minimumCount;
            }
        }
        
        answer.push(totalPressCount);
    })
    
    return answer;
}