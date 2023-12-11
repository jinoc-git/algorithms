function solution(participant, completion) {
    let answer = '';
    const participantMap = new Map();
    
    participant.forEach((name) => {
        const nameCount = participantMap.get(name);
        
        if (nameCount === undefined) participantMap.set(name, 1);
        else participantMap.set(name, nameCount + 1);
    });
    
    completion.forEach((name) => {
        const nameCount = participantMap.get(name);
        
        if (nameCount - 1 === 0) participantMap.delete(name);
        else participantMap.set(name, nameCount - 1);
    });
    
    participantMap.forEach((_, name) => answer = name);

    return answer;
}