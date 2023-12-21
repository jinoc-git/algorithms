function solution(n, computers) {
    let answer = 0;
    const connections = Array(n).fill(false);
    
    const connect = (idx) => {
        connections[idx] = true;
        for (let i = 0; i < n; i++) {
            if (computers[idx][i] === 1 && !connections[i]) connect(i);
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!connections[i]) {
            answer++;
            connect(i);
        }
    }
    
    return answer;
}