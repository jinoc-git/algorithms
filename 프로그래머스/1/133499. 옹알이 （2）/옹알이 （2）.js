function solution(babbling) {
    let answer = 0;
    
    babbling.forEach((word) => {
        let isPossible = true;
        let before = '';
        
        for (let i = 0; i < word.length; i++) {
            if (word[i] === 'a') {
                const check = word.substring(i, i + 3);
                if (check === 'aya' && before !== check) {
                    before = check;
                    i += 2;
                } else {
                    isPossible = false;
                    break;
                }
            }
            else if (word[i] === 'y') {
                const check = word.substring(i, i + 2);
                if (check === 'ye' && before !== check) {
                    before = check;
                    i += 1;
                } else {
                    isPossible = false;
                    break;
                }
            }
            else if (word[i] === 'w') {
                const check = word.substring(i, i + 3);
                if (check === 'woo' && before !== check) {
                    before = check;
                    i += 2;
                } else {
                    isPossible = false;
                    break;
                }
            }
            else if (word[i] === 'm') {
                const check = word.substring(i, i + 2);
                if (check === 'ma' && before !== check) {
                    before = check;
                    i += 1;
                } else {
                    isPossible = false;
                    break;
                }
            } 
            else isPossible = false;
        }
        
        if (isPossible) answer++;
    })
    
    return answer;
}