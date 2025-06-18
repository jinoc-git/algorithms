function solution(money) {
    if (money.length === 3) return Math.max(...money);
    
    const calc = (houseList) => {
        const maxMoney = new Array(houseList.length).fill(0);
        maxMoney[0] = houseList[0];
        maxMoney[1] = Math.max(houseList[0], houseList[1]);
        
        for (let i = 2; i < houseList.length; i++) {
            const cur = houseList[i];
            maxMoney[i] = Math.max(maxMoney[i - 1], cur + maxMoney[i - 2]);
        }
        
        return maxMoney[houseList.length - 1];
    }
    
    let answer = 0;
    
    const startFirstHouse = calc(money.slice(0, money.length - 1));
    const startNotFirstHouse = calc(money.slice(1, money.length));
    
    answer = Math.max(startFirstHouse, startNotFirstHouse);
    
    return answer;
}