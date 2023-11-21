function solution(answers) {
    const answer = [];
    const repeat = {
        person1: [1, 2, 3, 4, 5],
        person2: [2, 1, 2, 3, 2, 4, 2, 5],
        person3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    };
    const count = {
        person1: 0,
        person2: 0,
        person3: 0,
    };
    
    for (let i = 0; i < answers.length; i++) {
        const idx1 = i % repeat['person1'].length;
        const idx2 = i % repeat['person2'].length;
        const idx3 = i % repeat['person3'].length;

        const isCorrectPerson1 = answers[i] === repeat['person1'][idx1];
        if (isCorrectPerson1) count['person1']++;
        
        const isCorrectPerson2 = answers[i] === repeat['person2'][idx2];
        if (isCorrectPerson2) count['person2']++;
        
        const isCorrectPerson3 = answers[i] === repeat['person3'][idx3];
        if (isCorrectPerson3) count['person3']++;
    }
    
    const bigestCount = Math.max(...Object.values(count));
    
    if (count['person1'] === bigestCount) answer.push(1);
    if (count['person2'] === bigestCount) answer.push(2);
    if (count['person3'] === bigestCount) answer.push(3);
    
    return answer;
}

// function solution(answers) {
//     const answer = [];
//     const person1 = [1, 2, 3, 4, 5];
//     const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
//     const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//     let count1 = 0;
//     let count2 = 0;
//     let count3 = 0;
    
//     for (let i = 0; i < answers.length; i++) {
//         const repeat1 = i % person1.length;
//         const repeat2 = i % person2.length;
//         const repeat3 = i % person3.length;

//         if (answers[i] === person1[repeat1]) count1++;
//         if (answers[i] === person2[repeat2]) count2++;
//         if (answers[i] === person3[repeat3]) count3++;
        
//     }
    
//     const bigestCount = Math.max(count1, count2, count3);
    
//     if (count1 === bigestCount) answer.push(1);
//     if (count2 === bigestCount) answer.push(2);
//     if (count3 === bigestCount) answer.push(3);
    
//     return answer;
// }