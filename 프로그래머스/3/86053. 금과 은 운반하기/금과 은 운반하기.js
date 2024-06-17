function solution(a, b, g, s, w, t) {
    let start = 0;
    let end = 10e9 * 2 * 10e5 * 2;
    let mid = Math.floor((start + end) / 2);
    const cityLen = g.length;
    
    const count = (time) => {
        let gold = 0;
        let silver = 0;
        let weight = 0;
        
        for (let i = 0; i < cityLen; i++) {
            const remainWeight = Math.round(time / (2 * t[i]));
            const maxDelivery = remainWeight * w[i];
            gold += Math.min(g[i], maxDelivery);
            silver += Math.min(s[i], maxDelivery);
            weight += Math.min(g[i] + s[i] , maxDelivery);
        }
        
        const isOK = gold >= a && silver >= b && weight >= (a + b)
        
        if (isOK) return true;
        else return false;
    }
    
    while (start <= end) {
        if (count(mid)) end = mid - 1;
        else start = mid + 1;
        
        mid = Math.floor((start + end) / 2);
    }
    
    return start;
}