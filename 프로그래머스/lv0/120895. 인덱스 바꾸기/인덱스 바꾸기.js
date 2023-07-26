function solution(my_string, num1, num2) {
    let answer = '';
    const str1 = my_string[num1]
    const str2 = my_string[num2]
    for(let i in my_string) {
        if(i == num1) {
            answer += str2;
        } else if(i == num2) {
            answer += str1;
        } else {
            answer += my_string[i]
        }
    }
    
    return answer;
}