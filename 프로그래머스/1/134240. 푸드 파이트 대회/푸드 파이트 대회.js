function solution(food) {
    let answer = '';
    let player1 = '';
    
    for (let i = 1; i < food.length; i++) {
        const playerFoodNum = Math.floor(food[i] / 2);
        if (playerFoodNum === 0) continue;
        
        for (let j = 1; j <= playerFoodNum; j++) player1 += i;
    }
    
    const player2 = player1.split('').reverse().join('');
    
    answer = player1 + '0' + player2;
    
    return answer;
}