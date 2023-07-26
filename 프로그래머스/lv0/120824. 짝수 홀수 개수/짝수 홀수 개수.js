function solution(num_list) {
    let odd = 0;
    let even = 0;
    for(let a of num_list) {
        if(a % 2 > 0) {
            odd++;
        } else {
            even++;
        }        
    }
    let answer = [even, odd];
    return answer;
}