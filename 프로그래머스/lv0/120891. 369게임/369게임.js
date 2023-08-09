function solution(order) {
    let answer = 0;
    const orderArr = Array.from(order + '');
    for (let a of orderArr) {
        if (+a === 0) continue;
        if (a % 3 === 0) answer++;
    }
    
    return answer;
}