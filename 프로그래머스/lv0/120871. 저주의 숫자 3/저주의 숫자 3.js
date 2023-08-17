function solution(n) {
    let answer = n;
    
    const check = (start, num) => {
        let count = 0;

        for (let i = start; i <= num; i++) {
            const allq = i % 3 === 0;
            const haveThree = String(i).split('').find((n) => n === '3');
            if (allq || haveThree) count++;
        }
        
        if (count === 0) return;
        
        answer += count;
        check(num + 1, num + count);
        
    }
    
    check(1, n);
    
    return answer;
}