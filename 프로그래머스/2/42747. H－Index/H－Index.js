function solution(citations) {
    let answer = 0;
    const sortedCitations = citations.sort((a, b) => b - a);
    
    for (let i = 1; i <= sortedCitations.length; i++) {
        const citationCount = sortedCitations[i - 1];
        if (citationCount <= i) answer = Math.max(answer, citationCount);
        else answer = Math.max(answer, i);
    }
    
    return answer;
}