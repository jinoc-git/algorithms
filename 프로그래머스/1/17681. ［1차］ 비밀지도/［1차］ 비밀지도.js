function solution(n, arr1, arr2) {
    const answer = [];
    
    const changeFormat = (num) => {
        let result = '';
        for (let i = 0; i < n; i++) {
            const rest = num % 2;
            result = String(rest) + result;
            num = Math.floor(num / 2);
        }

        return result;
    }
    
    for (let i = 0; i < n; i++) {
        let row = '';
        const num1 = changeFormat(arr1[i]);
        const num2 = changeFormat(arr2[i]);
        
        for (let j = 0; j < n; j++) {
            const isWall = num1[j] === '1' || num2[j] === '1';
            if (isWall) row += '#';
            else row += ' ';
        }
        
        answer.push(row);
    }
    
    return answer;
}

