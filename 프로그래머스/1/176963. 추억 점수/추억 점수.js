function solution(name, yearning, photo) {
    const answer = photo.map((nameList) => {
        let sum = 0;
        for (let val of nameList) {
            const idx = name.indexOf(val);
            if (idx !== -1) sum += yearning[idx];
        }
        
        return sum;
    })
    
    return answer;
}

// function solution(name, yearning, photo) {
//     const answer = [];
    
//     photo.forEach((nameList) => {
//         let sum = 0;
//         for (let val of nameList) {
//             const idx = name.indexOf(val);
//             if (idx !== -1) sum += yearning[idx];
//         }
        
//         answer.push(sum);
//     })
    
//     return answer;
// }

// function solution(name, yearning, photo) {
//     const answer = [];
//     const score = new Map();
    
//     for (let i = 0; i < name.length; i++) score.set(name[i], yearning[i]);
    
//     photo.forEach((nameList) => {
//         let sum = 0;
//         for (let val of nameList) {
//             const nameScore = score.get(val);
//             if (nameScore !== undefined) sum += nameScore;
//         }
        
//         answer.push(sum);
//     })
    
//     return answer;
// }