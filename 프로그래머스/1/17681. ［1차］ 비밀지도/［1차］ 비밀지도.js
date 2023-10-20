function solution(n, arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        let row = '';
        let num1 = arr1[i];
        let num2 = arr2[i];
        
        for (let j = 0; j < n; j++) {
            const isWall = num1 % 2 === 1 || num2 % 2 === 1;
  
            if (isWall) row = '#' + row;
            else row = ' ' + row;
            
            num1 = Math.floor(num1 / 2);
            num2 = Math.floor(num2 / 2);
        }
        
        answer.push(row);
    }
    
    return answer;
}