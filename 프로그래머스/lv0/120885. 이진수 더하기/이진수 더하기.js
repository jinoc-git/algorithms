function solution(bin1, bin2) {
    let answer = '';
    let tranBin1 = 0;
    let tranBin2 = 0;
    let num1 = bin1.length - 1;
    let num2 = bin2.length - 1;
    for(let i = 0; i < bin1.length; i++) {
        tranBin1 += bin1[i] * 2**num1;
        num1--;
    }
    for(let i = 0; i < bin2.length; i++) {
        tranBin2 += bin2[i] * 2**num2;
        num2--;
    }
    
    let sum = tranBin1 + tranBin2;
    const half = (n) => {
        console.log(n)
        console.log('n', answer)
        if(n == 0) return;
        if(n == 1) {
            answer += '1';
            return;
        }
        if(n % 2 === 0) answer += '0';
        if(n % 2 === 1) answer += '1';
        let halfNum = parseInt(n / 2);
        half(halfNum);
    }
    
    half(sum);
    
    if(answer === '') return '0'
    return answer.split("").reverse().join("");
}