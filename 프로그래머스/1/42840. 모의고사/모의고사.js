function solution(answers) {
    const answer = [];
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        const repeat1 = i % person1.length;
        const repeat2 = i % person2.length;
        const repeat3 = i % person3.length;

        if (answers[i] === person1[repeat1]) count1++;
        if (answers[i] === person2[repeat2]) count2++;
        if (answers[i] === person3[repeat3]) count3++;
        
    }
    
    const bigestCount = Math.max(count1, count2, count3);
    
    if (count1 === bigestCount) answer.push(1);
    if (count2 === bigestCount) answer.push(2);
    if (count3 === bigestCount) answer.push(3);
    
    return answer;
}