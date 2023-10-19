function solution(sizes) {
    let answer = 0;
    let longestWidth = 0;
    let longestHeight = 0;
    
    for (let card of sizes) {
        const cardWidth = card[0];
        const cardHeight = card[1];
        if (cardWidth > cardHeight) {
            longestWidth = longestWidth > cardWidth ? longestWidth : cardWidth;
            longestHeight = longestHeight > cardHeight ? longestHeight : cardHeight;
        }
        else {
            longestWidth = longestWidth > cardHeight ? longestWidth : cardHeight;
            longestHeight = longestHeight > cardWidth ? longestHeight : cardWidth;
        }
    }
    
    answer = longestWidth * longestHeight;
    
    return answer;
}