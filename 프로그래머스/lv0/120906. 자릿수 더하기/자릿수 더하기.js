function solution(n) {
    let answer = 0;
    let strN = String(n);
    for(let a of strN) {
        answer += Number(a);
    }
    return answer;
}