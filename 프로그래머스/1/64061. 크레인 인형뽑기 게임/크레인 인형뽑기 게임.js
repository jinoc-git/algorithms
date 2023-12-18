function solution(board, moves) {
    let answer = 0;
    const bucket = [];

    moves.forEach((move) => {
        for (let i = 0; i < board.length; i++) {
            const floor = board[i];
            const doll = floor[move - 1];
            
            if (doll !== 0) {
                const topOfBucket = bucket[bucket.length - 1];
                if (topOfBucket === doll) {
                    bucket.pop();
                    answer += 2;
                }
                else bucket.push(doll);

                floor[move - 1] = 0;
                board[i] = floor;
                break;
            }
        }
    })
    
    return answer;
}