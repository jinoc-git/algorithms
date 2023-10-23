function solution(food) {
    let answer = '';
    let player1 = '';
    let player2 = '';
    
    for (let i = 1; i < food.length; i++) {
        const playerFoodNum = Math.floor(food[i] / 2);
        if (playerFoodNum === 0) continue;
        
        for (let j = 1; j <= playerFoodNum; j++) {
            player1 += i;
            player2 = i + player2;
        }
    }
    
    answer = player1 + '0' + player2;
    
    return answer;
}