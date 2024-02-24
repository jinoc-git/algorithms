function solution(wallpaper) {
    const answer = [51, 51, 0, 0];
    
    wallpaper.forEach((row, rowIdx) => {
        const minLuy = row.indexOf('#');
        const maxLuy = row.lastIndexOf('#') + 1;
        
        if (minLuy !== -1) {
            const originLux = answer[0];
            const originLuy = answer[1];
            answer[0] = Math.min(originLux, rowIdx);
            answer[1] = Math.min(originLuy, minLuy);
            
            if (minLuy !== maxLuy) {
                const originRdx = answer[2];
                const originRdy = answer[3];
                answer[2] = Math.max(originRdx, rowIdx + 1);
                answer[3] = Math.max(originRdy, maxLuy);
            }
        }
        
    })
    
    
    return answer;
}