function solution(progresses, speeds) {
    const answer = [];
    const queue = [...progresses];
    let day = 0;
    
    while (queue.length) {
        day += 1;
        const queueLen = queue.length;
        
        for (let i = 0; i < queueLen; i++) {
            const worked = queue[0];
            const progress = worked + (day * speeds[0]);
            if (progress < 100) break;

            speeds.shift();
            queue.shift();
        }
        
        const canDeployment = queueLen !== queue.length;
        if (canDeployment) {
            const progressCount = queueLen - queue.length;
            answer.push(progressCount);
        }
    }
    
    return answer;
}