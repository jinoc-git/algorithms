function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const queue = [[begin, 0]];
    const changedWord = new Set();
    changedWord.add(begin);
    
    const check = (before, after) => {
        let count = 0;
        const len = after.length;
        
        for (let i = 0; i < len; i++) {
            if (before[i] !== after[i]) count++;
        }
        
        if (count === 1) return true;
        
        return false;
    }
    
    while (queue.length) {
        const [before, count] = queue.shift();
        
        if (before === target) return count;
        
        words.forEach((after) => {            
            const canChange = check(before, after) && !changedWord.has(after);
            if (canChange) {
                queue.push([after, count + 1]);
                changedWord.add(after);
            }
        });
    }
    
    return 0;
}