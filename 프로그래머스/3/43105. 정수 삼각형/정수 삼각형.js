function solution(triangle) {
    let answer = 0;
    
    for (let i = 1; i < triangle.length; i++) {
        const row = triangle[i];
        for (let j = 0; j < row.length; j++) {
            if (j === 0) {
                const soloParent = triangle.at(i - 1).at(j);
                triangle[i][j] += soloParent;
            }
            else if (j === row.length - 1) {
                const soloParent = triangle.at(i - 1).at(j - 1);
                triangle[i][j] += soloParent;
            }
            else {
                const leftParent = triangle.at(i - 1).at(j - 1);
                const rightParent = triangle.at(i - 1).at(j);
                const maxParent = Math.max(leftParent, rightParent);
                triangle[i][j] += maxParent;
            }
        }
    }
    
    answer = Math.max(...triangle.at(-1));
    
    return answer;
}