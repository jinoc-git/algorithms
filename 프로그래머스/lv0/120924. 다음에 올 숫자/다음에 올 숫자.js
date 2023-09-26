function solution(common) {
    let answer = 0;
    const lastNum = common[common.length - 1];
    
    let isGeometricSequence = common[2] - common[1] !== common[1] - common[0];
    
    if (isGeometricSequence) {
        const ratio = common[2] / common[1];
        answer = lastNum * ratio;
    } else {
        const gap = common[2] - common[1];
        answer = lastNum + gap;
    }
    
    return answer;
}