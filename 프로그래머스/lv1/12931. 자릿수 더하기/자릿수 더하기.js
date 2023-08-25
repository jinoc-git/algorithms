function solution(n)
{
    let answer = String(n).split('').reduce((acc, cur) => acc += +cur, 0)    

    return answer;
}