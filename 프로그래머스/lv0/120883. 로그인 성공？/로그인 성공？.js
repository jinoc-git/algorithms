function solution(id_pw, db) {
    const matchId = db.find((user) => user[0] === id_pw[0]);

    if (!matchId) return 'fail';
    if (matchId[1] !== id_pw[1]) return 'wrong pw';
    
    return 'login';
}