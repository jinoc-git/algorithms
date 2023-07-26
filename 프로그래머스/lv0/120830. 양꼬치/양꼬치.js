function solution(n, k) {
    const sheep = n * 12000;
    const drink = k * 2000;
    const service = n / 10;
    
    var answer = sheep + drink - Math.floor(service) * 2000;
    return answer;
}