function solution(word) {
    const raw = ['A', 'E', 'I', 'O', 'U'];
    const wordList = {};
    let wordNum = 0;
    
    const makeWord = (currentWord, len) => {
        if (5 < len) return;
        
        wordList[currentWord] = wordNum++;
        
        raw.forEach((str) => {
            makeWord(currentWord + str, len + 1);
        })
    }
    
    makeWord('', 0);
    
    const answer = wordList[word];
    
    return answer;
}