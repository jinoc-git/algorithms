function solution(X, Y) {
    let answer = '';
    const sharingNums = [];
    const xNums = new Map();
    
    for (let str of X) {
        const numCount = xNums.get(+str);
        if (numCount) xNums.set(+str, numCount + 1);
        else xNums.set(+str, 1);
    }
    
    for (let str of Y) {
        const numCount = xNums.get(+str);
        const isSharing = numCount !== undefined && numCount !== 0;
        if (isSharing) {
            xNums.set(+str, numCount - 1);
            sharingNums.push(+str);
        }
    }
    
    if (sharingNums.length === 0) return "-1";
    
    answer = sharingNums.sort((a, b) => b - a);

    if (answer[0] === 0) return "0";
    
    return answer.join('');
}