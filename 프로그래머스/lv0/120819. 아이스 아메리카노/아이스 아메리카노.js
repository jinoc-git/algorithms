function solution(money) {
    if (money <= 0 || money > 1000000) return false;
    let answer = [];
    const coffee = 5500;
    let num = parseInt(money / coffee);
    let change;
    if (num < 1) {
        num = 0;
        change = money;
    } else {
        change = money - coffee * num;
    }
    answer.push(num, change);
    return answer;
}