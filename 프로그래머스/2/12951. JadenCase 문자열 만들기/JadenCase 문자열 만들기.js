function solution(s) {
    const answer = s.split(' ').map((str) => {
        if (str === '') return '';
        
        const firstLetter = str[0];
        const etcLetters = str.slice(1).toLowerCase();
        
        const letter = Number(firstLetter);
        if (isNaN(letter)) {
            const changedFormat = firstLetter.toUpperCase() + etcLetters;
            return changedFormat;
        }
        
        return firstLetter + etcLetters;
    }).join(' ');
    
    return answer;
}