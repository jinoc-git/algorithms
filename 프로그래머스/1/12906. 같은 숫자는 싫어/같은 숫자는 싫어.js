function solution(arr)
{
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const next = arr[i + 1];
        if (current !== next) answer.push(current);
    }
    
    return answer;
}