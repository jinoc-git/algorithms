function solution(numbers) {
    let answer = 0;
    const numArr = numbers.split('');
    const allStr = new Set();
    
    const isPrime = (n) => {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    const permutation = (arr, str) => {
        if (arr.length >= 1) {
            for (let i = 0; i < arr.length; i++) {
                const newStr = str + arr[i];
                const newArr = [...arr];
                newArr.splice(i, 1);
                
                if (isPrime(+newStr)) allStr.add(+newStr);
                permutation(newArr, newStr);
            }
        }
    }
    
    permutation(numArr, '');

    answer = allStr.size;
    
    return answer;
}