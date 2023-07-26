function solution(my_string, letter) {
    let answer = '';
    for(let a of my_string) {
        if(a !== letter) answer += a;
    }
    return answer
}