function solution(new_id) {
    let answer = '';
    
    for (let str of new_id) answer += str.toLowerCase();
    
    const step2Regex = /[^a-z0-9\-_\.]/g;
    answer = answer.replace(step2Regex, '');

    const step3Regex = /\.+/g;
    answer = answer.replace(step3Regex, '.');
    
    if (answer[0] === '.') answer = answer.substring(1);
    if (answer[answer.length - 1] === '.') answer = answer.substring(0, answer.length - 1);
    
    if (answer === '') answer = 'a';
    
    if (answer.length >= 16) answer = answer.substring(0, 15);
    if (answer[answer.length - 1] === '.') answer = answer.substring(0, answer.length - 1);
    
    while (answer.length <= 2) answer += answer[answer.length - 1];
    
    return answer;
}