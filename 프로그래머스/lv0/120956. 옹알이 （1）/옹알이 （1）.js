function solution(babbling) {
    let answer = 0;
    const possibleLetterList = new Map([['a', 'aya'], ['y', 'ye'], ['w', 'woo'], ['m', 'ma']]);

    for (let word of babbling) {
        let copyWord = word;        
        
        for (let n = 0; n < possibleLetterList.size; n++) {
            const checkingWord = possibleLetterList.get(copyWord[0]);
            if (!checkingWord) break;
            
            const wordLength = checkingWord.length;        
            const isSameWord = copyWord.slice(0, wordLength) === checkingWord;
            if (!isSameWord) break;
            
            copyWord = copyWord.slice(wordLength);
            if (copyWord === '') {
                answer++;
                break;
            }
        }
    }
    
    return answer;
}