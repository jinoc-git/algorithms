function solution(park, routes) {
    const parkWidth = park[0].length - 1;
    const parkHeight = park.length - 1;
    const answer = [];
    
    for (let i = 0; i < park.length; i++) {
        const row = park[i];
        const startCol = row.indexOf('S');
        if (startCol !== -1) {
            answer.push(i);
            answer.push(startCol);
            break;
        }
    }

    routes.forEach((route) => {
        const [to, distance] = route.split(' ');
        
        let [afterY, afterX] = answer;
        let isOk = true;
        
        for (let i = 0; i < Number(distance); i++) {
            if (to === 'N') afterY--;
            else if (to === 'S') afterY++;
            else if (to === 'W') afterX--;
            else if (to === 'E') afterX++;
            
            const isOver = afterY < 0 || afterY > parkHeight || afterX < 0 || afterX > parkWidth;
            if (isOver || park[afterY][afterX] === 'X') {
                isOk = false;
                break;
            }
        }
        
        if (isOk) {
            answer[0] = afterY;
            answer[1] = afterX;
        }
    })
    
    return answer;
}