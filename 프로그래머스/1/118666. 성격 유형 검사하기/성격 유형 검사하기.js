function solution(survey, choices) {
    let answer = '';
    const character = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
    
    for (let i = 0; i < survey.length; i++) {
        const [type1, type2] = survey[i].split('');
        const choice = choices[i];
        
        if (choice < 4) character[type1] += 4 - choice;
        if (choice > 4) character[type2] += choice - 4;
    }
    
    if (character['R'] < character['T']) answer += 'T';
    else answer += 'R';
    
    if (character['C'] < character['F']) answer += 'F';
    else answer += 'C';
    
    if (character['J'] < character['M']) answer += 'M';
    else answer += 'J';
    
    if (character['A'] < character['N']) answer += 'N';
    else answer += 'A';
    
    return answer;
}