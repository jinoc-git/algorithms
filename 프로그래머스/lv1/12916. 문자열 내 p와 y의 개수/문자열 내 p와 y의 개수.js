function solution(s){
    let count = 0;
       
    for (let str of s.toUpperCase()) {
        if (str === 'P') count++;
        if (str === 'Y') count--;
    }
    
    return count === 0;
}