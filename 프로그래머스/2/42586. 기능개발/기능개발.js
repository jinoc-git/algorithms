function solution(progresses, speeds) {
    const answer = [];
    const queue = [...progresses];
    let day = 0;
    
    while (queue.length) {
        day += 1;
        const queueLen = queue.length;
        
        for (let i = 0; i < queueLen; i++) {
            const progress = queue[0];
            if (progress + (day * speeds[0]) < 100) break;

            speeds.shift();
            queue.shift();
        }

        if (queueLen !== queue.length) answer.push(queueLen - queue.length);
    }
    
    return answer;
}