function solution(n, lost, reserve) {
    let answer = n;
    
    lost.sort((a, b) => a - b);
    const reserveSet = new Set(reserve);

    lost.forEach((lostNum, idx) => {
        const isCanBorrowNext = lostNum + 1 !== lost[idx + 1] && reserveSet.has(lostNum + 1);
        
        if (reserveSet.has(lostNum)) reserveSet.delete(lostNum);
        else if (reserveSet.has(lostNum - 1)) reserveSet.delete(lostNum - 1);
        else if (isCanBorrowNext) reserveSet.delete(lostNum + 1);
        else answer--;
    })
    
    return answer;
}