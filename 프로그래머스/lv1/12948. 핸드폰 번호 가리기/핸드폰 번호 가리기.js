function solution(phone_number) {
    const answer = phone_number.split('').fill('*', 0, -4).join('');
    
    return answer;
}