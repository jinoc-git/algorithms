function solution(keyinput, board) {
    const pos = { 'X': 0, 'Y': 0 }
    const maxPosXAbs = (board[0] - 1) / 2;
    const maxPosYAbs = (board[1] - 1) / 2;
    for (let a of keyinput) {
        if (a === 'left') {
            if (pos['X'] === -maxPosXAbs) continue;
            pos['X'] -= 1;
        }
        if (a === 'right') {
            if (pos['X'] === maxPosXAbs) continue;
            pos['X'] += 1;
        }
        if (a === 'down') {
            if (pos['Y'] === -maxPosYAbs) continue;
            pos['Y'] -= 1;
        }
        if (a === 'up') {
            if (pos['Y'] === maxPosYAbs) continue;
            pos['Y'] += 1;
        }
    }
    const answer = [pos['X'], pos['Y']];
    return answer;
}