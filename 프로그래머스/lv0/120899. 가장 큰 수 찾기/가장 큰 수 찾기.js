function solution(array) {
    let answer = [];
    let big = [...array].sort((a, b) => b - a)[0];
    answer.push(big);
    let idx = array.indexOf(big);
    answer.push(idx);
    return answer;
}