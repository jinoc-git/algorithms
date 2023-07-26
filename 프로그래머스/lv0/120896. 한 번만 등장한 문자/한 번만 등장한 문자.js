function solution(s) {
    let answer = '';
    const sortStr = Array.from(s).sort((a, b) => a > b ? 1 : -1).join('');
    const check = (str) => {
        if(str.length === 0) return;
        if(str[0] !== str[1]) {
            answer += str[0];
        }
        const reCheck = str.replaceAll(str[0], '');
        check(reCheck);
    }
    check(sortStr);
    
    return answer;
}