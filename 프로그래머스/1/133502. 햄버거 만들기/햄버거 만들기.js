function solution(ingredient) {
    let answer = 0;
    const items = [];
    
    ingredient.forEach((item) => {
        items.push(item);
        
        if (items.length >= 4) {
            const hamburger = items.slice(-4).join('');
            
            const isOk = hamburger === '1231'
            if (isOk) {
                items.splice(-4);
                answer++;
            }
        }
    })
    
    return answer;
}