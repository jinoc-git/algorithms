function solution(numbers, hand) {
    let answer = '';
    let left = 10;
    let right = 12;
    
    const calcGap = (cur, target) => {
        const gap = Math.abs(cur - target);
        return Math.floor(gap / 3) + Math.floor(gap % 3);
    }
    
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i] === 0 ? 11 : numbers[i];
        
        if (number === 1 || number === 4 || number === 7) {
            answer += 'L';
            left = number;
            continue;
        }
        if (number === 3 || number === 6 || number === 9) {
            answer += 'R';
            right = number;
            continue;
        }
        
        const leftGap = calcGap(left, number);
        const rightGap = calcGap(right, number);
        if (leftGap === rightGap) {
            if (hand === 'left') {
                answer += 'L';
                left = number;
            } else {
                answer += 'R';
                right = number;
            }
            continue;
        }
        if (leftGap < rightGap) {
            answer += 'L'
            left = number;
            continue;
        }
        if (leftGap > rightGap) {
            answer += 'R'
            right = number;
        }
    }
    
    return answer;
}