function solution(babbling) {
    let answer = 0;
    const possibleLetterList = new Map([['a', 'aya'], ['y', 'ye'], ['w', 'woo'], ['m', 'ma']]);

    for (let word of babbling) {
        let copyWord = word;
        let firstLetter = word[0];
        
        const isPossibleLetter = possibleLetterList.has(firstLetter);
        if (!isPossibleLetter) continue;
        
        const checkedWord = [];
        
        for (let n = 0; checkedWord.length < 4; n++) {
            const checkingWord = possibleLetterList.get(copyWord[0]);
            if (!checkingWord) break;
            
            const isChecked = checkedWord.find((v) => v === checkingWord);
            if (isChecked) break;

            checkedWord.push(checkingWord);
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