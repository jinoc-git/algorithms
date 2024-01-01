function solution(clothes) {
    let answer = 1;
    const clothesCount = new Map();
    
    for (let [name, type] of clothes) {
        const typeCount = clothesCount.get(type) ?? 0;
        clothesCount.set(type, typeCount + 1);
    }
    
    const typeCountList = clothesCount.values();

    for (let count of typeCountList) answer *= count + 1;
    
    return answer - 1;
}