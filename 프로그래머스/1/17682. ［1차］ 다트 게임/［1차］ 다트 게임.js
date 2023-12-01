function solution(dartResult) {
    let answer = 0;
    const result = [];
    
    const calcBonus = (s, n) => {
        if (s === 'S') return n;
        if (s === 'D') return n * n;
        if (s === 'T') return n * n * n;
    }
    
    for (let i = 0; i < dartResult.length; i++) {
        const str = dartResult[i];
        
        const isTen = str === '0' && dartResult[i - 1] === '1';
        const isScore = !isNaN(+str);
        const isBonus = str === 'S' || str === 'D' || str === 'T';
        const isDubbleOption = str === '*';
        const isMinusOption = str === '#';
        
        if (isTen) {
            result.pop();
            result.push(10);
            continue;
        }
        
        if (isScore) {
            result.push(+str);
        } 
        else if (isBonus) {
            const score = result.pop();
            result.push(calcBonus(str, score));
        } 
        else if (isDubbleOption || isMinusOption) {
            const score = result.pop();

            if (isDubbleOption) {
                const beforeScore = result.pop();
                if (beforeScore) result.push(beforeScore * 2);
                result.push(score * 2);
            }
            
            if (isMinusOption) result.push(-score);
        }
    }

    answer = result.reduce((acc, cur) => acc + cur, 0);
    
    return answer;
}