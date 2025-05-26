function solution(priorities, location) {
    let runCount = 0;
    const queue = priorities.map((val, index) => ({
        priority: val,
        index
    }));
    
    while (queue.length > 0) {
        const curProcess = queue.shift();
        const hasHigherPriorityProcess = queue.some((process) => process.priority > curProcess.priority);
        if (hasHigherPriorityProcess) {
            queue.push(curProcess);
        } else {
            runCount++;
            const isTargetProcess = curProcess.index === location;
            if (isTargetProcess) break;
        }
    }
    
    return runCount;
}