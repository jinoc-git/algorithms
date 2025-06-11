function solution(people, limit) {
    let answer = 0;
    const ascendingPeople = people.sort((a, b) => a - b);
    
    while (ascendingPeople.length) {
        const min = ascendingPeople.at(0);
        const max = ascendingPeople.at(-1);
        if (min + max <= limit) {
            ascendingPeople.shift();
        }
        ascendingPeople.pop();
        answer++;
    } 
    
    return answer;
}