function solution(numbers) {
    const answer = numbers.map((n) => String(n)).sort((str1, str2) => {
        return (str2 + str1) - (str1 + str2);
    }).join('');

    if (+answer === 0) return "0";

    return answer;
}