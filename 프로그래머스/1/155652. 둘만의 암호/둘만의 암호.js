const ALPHABET =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function solution(s, skip, index) {
    let answer = '';
    const base = ALPHABET.filter((str) => !skip.includes(str));
    const max = base.length;
    
    for (let str of s) {
        let skippedIdx = base.indexOf(str) + index;
        if (skippedIdx >= max) skippedIdx %= max;

        answer += base[skippedIdx];
    }
    
    return answer;
}