function solution(board) {
    let answer = 0;
    const dangerZone = new Map();
    
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        const bombIndex = [];
        
        for (let j = 0; j < row.length; j++) {
            const space = row[j];
            
            if (space === 1) bombIndex.push(j);
            else bombIndex.push(true);
        }

        dangerZone.set(i, bombIndex);
    }
    
    dangerZone.forEach((rowValue, rowNum, zone) => {
        for (let space of rowValue) {
            const isDanger = typeof space === 'number';
            if (isDanger) {
                const beforeRow = zone.get(rowNum - 1);
                if (beforeRow) {
                    const newBeforeRow = beforeRow.map((item, idx) => {
                        const needChange = idx === space - 1 || idx === space || idx === space + 1;
                        if (needChange && typeof item !== 'number') return false;
                        return item;
                    })
                    zone.set(rowNum - 1, newBeforeRow);
                }
                
                const afterRow = zone.get(rowNum + 1);
                if (afterRow) {
                    const newAfterRow = afterRow.map((item, idx) => {
                        const needChange = idx === space - 1 || idx === space || idx === space + 1;
                        if (needChange && typeof item !== 'number') return false;
                        return item;
                    })
                    zone.set(rowNum + 1, newAfterRow);
                }
                
                const currentRow = zone.get(rowNum);
                const newCurrentRow = currentRow.map((item, idx) => {
                    const needChange = idx === space - 1 || idx === space || idx === space + 1;
                    if (needChange && typeof item !== 'number') return false;
                    return item;
                })
                zone.set(rowNum, newCurrentRow);
            } 
        }
    })

    dangerZone.forEach((rowValue) => {
        const safeZone = rowValue.filter((space) => space === true);
        answer += safeZone.length;
    })
    
    return answer;
}