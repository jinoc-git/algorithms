function solution(my_string) {
    let answer = '';
    const strSet = new Set(my_string);
    
    const keys = strSet.keys();
    
    for (let a of keys) {
        answer += a;
    }
    
    return answer;
}