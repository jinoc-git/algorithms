function solution(queue1, queue2) {
    const queue = queue1.concat(queue2);
    let sumQ1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sumQ2 = queue2.reduce((acc, cur) => acc + cur, 0);    
    const half = (sumQ1 + sumQ2) / 2;
    
    let q1Pointer = 0;
    let q2Pointer = queue1.length;
    
    for (let i = 0; i < queue.length * 3; i++) {
        if (sumQ1 === half) return i;

        if (sumQ1 > half) {
            sumQ1 -= queue[q1Pointer % queue.length];
            q1Pointer++;
        } else {
            sumQ1 += queue[q2Pointer % queue.length];
            q2Pointer++;
        }
    }
    
    return -1;
}