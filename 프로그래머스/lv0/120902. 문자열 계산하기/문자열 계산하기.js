function solution(my_string) {
    const strArr = my_string.split(' ');
    let mark = '';
    let answer = +strArr[0];
    for (let i = 1; i < strArr.length; i++) {
        if (mark === '') {
            mark = strArr[i];
            continue;
        }
        if (mark === '+') {
            answer += +strArr[i];
            mark = '';
        }
        if (mark === '-') {
            answer -= +strArr[i];
            mark = '';
        }
    }
    
    return answer;
}