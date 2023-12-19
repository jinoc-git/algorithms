function solution(numbers) {
    const answer = numbers.map((n) => String(n)).sort((str1, str2) => {
        if (str1 + str2 < str2 + str1) return 1;
        if (str1 + str2 > str2 + str1) return -1;
        if (str1 + str2 === str2 + str1) return 0;
    }).join('');

    if (+answer === 0) return "0";

    return answer;
}