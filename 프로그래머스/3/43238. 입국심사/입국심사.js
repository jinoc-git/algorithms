function solution(n, times) {
    let low = 1;
    let high = Math.max(...times) * n;
    let answer = high;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let peopleCount = 0;
        
        for (let i = 0; i < times.length; i++) {
            peopleCount += Math.floor(mid / times[i]);
            if (peopleCount >= n) break;
        }
        
        if (peopleCount >= n) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return answer;
}