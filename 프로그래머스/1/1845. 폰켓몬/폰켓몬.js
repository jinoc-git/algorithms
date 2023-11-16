function solution(nums) {
    let answer = 0;
    const getCount = nums.length / 2;
    const pokemon = new Set(nums);
    const pokemonNum = pokemon.size;
    
    if (getCount <= pokemonNum) answer = getCount;
    else answer = pokemonNum;
    
    return answer;
}