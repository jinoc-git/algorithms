function solution(s) {
    let answer = '';
    let lowerCase = '';
    let upperCase = '';
    
    for (let str of s) {
        const isUpperCase = str.toUpperCase() === str;
        if (isUpperCase) upperCase += str;
        else lowerCase += str;
    }
    
    const sortedLowerCase = lowerCase.split('').sort((a, b) => b.localeCompare(a)).join('');
    const sortedUpperCase = upperCase.split('').sort((a, b) => b.localeCompare(a)).join('');
    
    answer = sortedLowerCase + sortedUpperCase;
    
    return answer;
}