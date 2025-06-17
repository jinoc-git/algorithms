function solution(name) {
    let answer = 0;
    
    for (let i = 0; i < name.length; i++) {
        const charCode = name.charCodeAt(i);
        const charCodeA = 'A'.charCodeAt(0);
        const charCodeZ = 'Z'.charCodeAt(0);
        answer += Math.min(charCode - charCodeA, charCodeZ - charCode + 1);
    }
    
    let move = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        let nextA = i + 1;
        while (nextA < name.length && name[nextA] === 'A') {
            nextA++;
        }
        
        const costGoAndBack = i + name.length - nextA + Math.min(i, name.length - nextA);
        move = Math.min(move, costGoAndBack);
    }
    
    answer += move;
    
    return answer;
}