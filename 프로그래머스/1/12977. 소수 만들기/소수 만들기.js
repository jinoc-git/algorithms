const isPrime = (num) => {
    let n = 2;
    while (n <= Math.sqrt(num)) {
        if (num % n === 0) return false;
        n++;
    }
        
    return true;
}

function solution(nums) {
    let answer = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k]; 
 
                if (isPrime(sum)) answer++;
            }
        }
    }
    
    return answer;
}

