function solution(new_id) {
    let answer = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .substring(0, 15).replace(/\.$/, '')

    answer = answer.padEnd(3, answer[answer.length - 1]);
    
    return answer;
}