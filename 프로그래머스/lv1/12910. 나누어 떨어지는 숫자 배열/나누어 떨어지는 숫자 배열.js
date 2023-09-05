function solution(arr, divisor) {
    const nums = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            nums.push(arr[i]);
        }
    }
    
    if (nums.length === 0) return [ -1 ];
    
    const answer = nums.sort((a, b) => a - b)
    
    return answer;
}