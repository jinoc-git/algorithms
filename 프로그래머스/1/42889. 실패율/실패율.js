function solution(N, stages) {
    let users = stages.length;
    const stage = new Array(N + 1).fill([0, 0]);

    for (let i = 0; i < stages.length; i++) {
        const userStage = stages[i];
        const [_, count] = stage[userStage - 1]
        stage[userStage - 1] = [userStage, count + 1];
    }

    const failureRate = stage.map(([currentStage, count], idx) => {
        const failure = count / users;
        users -= count;
        return [currentStage === 0 ? idx + 1 : currentStage, failure];
    })
    
    failureRate.pop();
    
    const answer = failureRate.sort((a, b) => {
        const [aStage, aFailure] = a;
        const [bStage, bfailure] = b;
        
        if (bfailure - aFailure < 0) return -1;
        if (bfailure - aFailure > 0) return 1;
        if (bfailure === aFailure) {
            if (aStage - bStage < 0) return -1;
            if (aStage - bStage > 0) return +1;
        }
    }).map(([currentStage, failure]) => currentStage);
    
    return answer;
}