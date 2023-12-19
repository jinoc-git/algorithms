function solution(numbers) {
    let answer = '';
    const sortedNumbers = numbers.map((n) => String(n)).sort((str1, str2) => {
        if (str1 + str2 < str2 + str1) return 1;
        if (str1 + str2 > str2 + str1) return -1;
        if (str1 + str2 === str2 + str1) return 0;
    }).join('');

    if (+sortedNumbers === 0) return "0";
    
    for (let str of sortedNumbers) answer += str;

    return answer;
}