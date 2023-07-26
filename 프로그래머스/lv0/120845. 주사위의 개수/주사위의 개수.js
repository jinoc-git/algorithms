function solution(box, n) {
    let answer = 1;
    for(let a of box) {
        answer *= Math.floor(a / n)
    }
    return answer;
}