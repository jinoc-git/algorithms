function solution(N, stages) {
    let users = stages.length;
    const stage = new Array(N + 1).fill([null, 0]);

    for (let i = 0; i < stages.length; i++) {
        const userStage = stages[i];
        const [_, count] = stage[userStage - 1]
        stage[userStage - 1] = [userStage, count + 1];
    }

    const failureRate = stage.map(([currentStage, count], idx) => {
        const failure = count / users;
        users -= count;
        return [currentStage ?? idx + 1 , failure];
    })
    
    failureRate.pop();
    
    const answer = failureRate.sort(([_, aFailure], [__, bFailure]) => bFailure - aFailure)
        .map(([currentStage, failure]) => currentStage);
    
    return answer;
}