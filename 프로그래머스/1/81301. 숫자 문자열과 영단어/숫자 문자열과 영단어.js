const NUMBER = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
};

function solution(s) {
    if (!isNaN(s)) return Number(s);
    
    let answer = '';
    let word = '';
    
    for (let str of s) {
        if (isNaN(str)) word += str;
        else answer += str;
        
        if (NUMBER[word]) {
            answer += NUMBER[word];
            word = '';
        }
    }

    return Number(answer);
}