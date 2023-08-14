function solution(a, b) {
    if (a === b) return 1;
    
    let answer = 1;
    
    // 기약분수 만들기
    const smallNum = a < b ? a : b
    let num = 2;
    while(num <= smallNum) {
        if (a % num === 0 && b % num ===0) {
            a = a / num;
            b = b / num;
        } else {
            num++
        }
    }
    console.log(a, b)
    
    // 분모 소인수분해하기
    const aliq = new Set();
    let n = 2;
    while(n <= b) {
        if (b % n === 0) {
            aliq.add(n);
            b = b / n;
        } else {
            n++
        }
    }
    
    aliq.delete(2);
    aliq.delete(5);

    console.log(aliq.size)
    if (aliq.size) answer = 2;
    
    
    return answer;
}