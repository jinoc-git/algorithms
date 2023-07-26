function solution(dot) {
    let posX = dot[0];
    let posY = dot[1];
    if (posX > 0 && posY > 0) return 1;
    if (posX < 0 && posY > 0) return 2;
    if (posX < 0 && posY < 0) return 3;
    if (posX > 0 && posY < 0) return 4;
}