function solution(numbers) {
    let answer = numbers;
    const enNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i = 0; i < enNums.length; i++) {
        console.log(answer)
        answer = answer.replaceAll(enNums[i], i);
    }

    return +answer;
}