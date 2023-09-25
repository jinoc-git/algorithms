function solution(polynomial) {
    let answer = '';
    let xNum = 0;
    let constant = 0;
    const polynomialArr = polynomial.split(' ')

    for (let a of polynomialArr) {
        if (a === '+') continue;
        
        if (isNaN(Number(a))) {
            let n = a.split('x').join('');
            n = n === '' ? 1 : n;
            xNum += +n;
        } else {
            constant += +a;
        }
    }

    let constantStr = ''
    let xString = ''
    if (constant > 0) constantStr = String(constant);
    if (xNum > 0) xString = String(xNum) + 'x';
    if (xNum === 1) xString = 'x';
    
    if (constantStr === '' && xString !== '') answer = xString;
    if (xString === '' && constantStr !== '') answer = constantStr;
    if (xString !== '' && constantStr !== '') answer = xString + ' + ' + constantStr;

    return answer;
}