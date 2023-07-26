function solution(array) {    
    let answer = 0;
    let str = String(array).split(',').join('');
    for(let i  = 0; i < str.length; i++) {
        if(str[i] === '7') {
            answer += 1
        }
    }
   
    return answer;
}