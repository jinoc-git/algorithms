function solution(s){
    let answer = false;
    
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        const top = stack[stack.length - 1];
        if (!top) {
            stack.push(str);
            continue;
        }

        if (str === ')' && top === '(') {
            stack.pop();
        } else {
            stack.push(str);
        }
    }
    
    if (stack.length === 0) answer = true;

    return answer;
}