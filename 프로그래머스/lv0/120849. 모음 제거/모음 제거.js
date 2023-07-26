function solution(my_string) {
    let answer = '';
    for(let a of my_string) {
        if(a !== 'a' && a !== 'e' && a !== 'i' && a !== 'o' && a !== 'u'){
            answer += a;
        }
    }
    
    return answer;
}