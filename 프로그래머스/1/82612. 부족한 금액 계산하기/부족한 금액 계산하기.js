function solution(price, money, count) {
    let answer = -1;
    let pay = 0;
    
    for (let i = 1; i <= count; i++) pay += price * i;
    
    if (pay > money) answer = pay - money;
    else answer = 0;

    return answer;
}