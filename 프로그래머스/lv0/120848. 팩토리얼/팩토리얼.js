function solution(n) {
    let sum = 1;
    let count = 1;
    const fac = (num) => {
        sum *= ++count;
        if(sum > num) {
            return count - 1;
        } else {
            return fac(num);
        }
    }
    const answer = fac(n)
    return answer;
}