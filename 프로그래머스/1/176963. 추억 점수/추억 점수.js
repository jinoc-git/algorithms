function solution(name, yearning, photo) {
    const answer = [];
    const score = new Map();
    
    for (let i = 0; i < name.length; i++) score.set(name[i], yearning[i]);
    
    photo.forEach((nameList) => {
        let sum = 0;
        for (let val of nameList) {
            const nameScore = score.get(val);
            if (nameScore !== undefined) sum += nameScore;
        }
        
        answer.push(sum);
    })
    
    return answer;
}