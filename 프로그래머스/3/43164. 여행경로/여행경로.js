function solution(tickets) {
    let answer = [];
    const ticketLen = tickets.length;
    const visited = Array(ticketLen).fill(false);
    const ways = [];

    tickets.sort();

    
    const fly = (city, count) => {
        ways.push(city);
        
        if (count === ticketLen) {
            answer = ways;
            return true;
        }
        
        for (let i = 0; i < ticketLen; i++) {
            if (!visited[i] && tickets[i][0] === city) {
                visited[i] = true;
                const next = tickets[i][1];
                if (fly(next, count + 1)) return true;
                
                visited[i] = false;
            }
        }
        
        ways.pop();
        
        return false;
    }
    
    fly('ICN', 0);
    
    console.log(ways)
    
    return answer;
}