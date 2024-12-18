function solution(brown, yellow) {
    const a = -2;
    const b = brown + 4;
    const c = -2 * brown - 2 * yellow;
    
    const formular = b * b - 4 * a * c;
    const x = (-b - Math.sqrt(formular))  / (2 * a);
    const y = (-b + Math.sqrt(formular))  / (2 * a);
    
    return [x, y];
}