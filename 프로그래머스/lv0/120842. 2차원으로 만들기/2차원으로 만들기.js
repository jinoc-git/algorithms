function solution(num_list, n) {
    let answer = [];
    let count = num_list.length / n;
    for(let i = 0; i < count; i++) {
        let room = num_list.slice(i * n, i * n + n);
        answer.push(room);
    }
    return answer;
}