function solution(M, N) {
    // (M - 1) + (N - 1) * M 
    // = M - 1 + NM - M
    // = NM - 1
    const answer = N * M - 1
    return answer;
}