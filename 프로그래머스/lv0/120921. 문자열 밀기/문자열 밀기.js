function solution(A, B) {
    if (A === B) return 0;
    
    let answer = 0;
    const strLength = A.length;
    let isPossible = false;
    
    for (let _ of A) {
        if (A === B) {
            isPossible = true;
            break;
        }
        
        A = A[strLength - 1] + A.split('').splice(0, strLength - 1).join('');
        answer++;
    }
    
    if (!isPossible) answer = -1;
    
    return answer;
}