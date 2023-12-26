function solution(begin, target, words) {
    const changedWord = [];
    const queue = [[begin, 0]];
    
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
        const [before, answer] = queue.shift();
        
        if (before === target) return answer;
        
        words.forEach((after) => {
            if (changedWord.includes(after)) return;
            
            const canChange = check(before, after);
            if (canChange) {
                queue.push([after, answer + 1]);
                changedWord.push(after);
            }
        })
    }
    
    return 0;
}