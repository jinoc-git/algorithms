function solution(my_string) {
    let answer = '';
    const num = my_string.length - 1;
    for (let i = num; i >= 0; i--) {
        let last = my_string[i];
        answer += last;
    }
    return answer;
}