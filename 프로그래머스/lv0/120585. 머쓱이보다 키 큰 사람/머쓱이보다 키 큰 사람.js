function solution(array, height) {
    let answer = 0;
    for(let a of array) {
        if(a > height) answer++;
    }
    return answer;
}