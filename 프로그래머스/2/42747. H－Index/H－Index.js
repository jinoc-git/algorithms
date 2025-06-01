function solution(citations) {
    let answer = 0;
    const sortedCitations = citations.sort((a, b) => b - a);
    
    if (sortedCitations[0] === 0) return answer;
    
    for (let i = 0; i < sortedCitations.length; i++) {
        const citationCount = sortedCitations[i];
        if (citationCount < i + 1) {
            answer = i;
            break;
        }
        
        answer = i + 1;
    }
    
    return answer;
}