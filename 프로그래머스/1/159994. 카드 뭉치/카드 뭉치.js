function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    
    for (let i = 0; i < goal.length; i++) {
        const keyword = goal[i];
        const card1 = cards1[0];
        const card2 = cards2[0];
        if (keyword === card1) cards1.shift();
        if (keyword === card2) cards2.shift();
        
        const noMatchWord = keyword !== card1 && keyword !== card2;
        if (noMatchWord) answer = 'No';
    }
    
    return answer;
}