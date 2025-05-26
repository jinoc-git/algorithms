function solution(priorities, location) {
    let runCount = 0;
    const queue = priorities.map((val, index) => ({
        priority: val,
        index
    }));
    
    while (queue.length > 0) {
        const curProcess = queue.shift();
        const isLowerPrioritiy = queue.some((process) => process.priority > curProcess.priority);
        if (isLowerPrioritiy) {
            queue.push(curProcess);
        } else {
            runCount++;
            const isTargetProcess = curProcess.index === location;
            if (isTargetProcess) break;
        }
    }
    
    return runCount;
}