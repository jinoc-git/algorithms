function solution(board, moves) {
    let answer = 0;
    let newBoard = board;
    const bucket = [];

    moves.forEach((move, idx) => {
        for (let i = 0; i < newBoard.length; i++) {
            const floor = newBoard[i];
            const area = floor[move - 1];
            const hasDoll = area !== 0;
            
            if (hasDoll) {
                const topOfBucket = bucket[bucket.length - 1];
                if (topOfBucket === area) {
                    bucket.pop();
                    answer += 2;
                }
                else bucket.push(area);

                floor[move - 1] = 0;
                newBoard[i] = floor;
                break;
            }
        }
    })
    
    return answer;
}