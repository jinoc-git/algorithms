function solution(str1, str2) {
    let answer = 2;
    if(str1.split(str2)[0] !== str1) answer = 1;
    return answer;
}