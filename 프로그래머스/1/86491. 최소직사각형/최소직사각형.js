function solution(sizes) {
    let answer = 0;
    let longSide = [];
    let smallSide = [];
    
    for (let card of sizes) {
        const cardWidth = card[0];
        const cardHeight = card[1];
        if (cardWidth > cardHeight) {
            longSide.push(cardWidth);
            smallSide.push(cardHeight);
        }
        else {
            longSide.push(cardHeight);
            smallSide.push(cardWidth); 
        }
    }
    
    answer = Math.max(...longSide) * Math.max(...smallSide);
    
    return answer;
}