function solution(genres, plays) {
    const musicList = new Map();
    
    for (let i = 0; i < plays.length; i++) {
        const genre = genres[i];
        const playCount = plays[i];
        const genrePlayCount = musicList.get(genre) ?? { 'total': 0 };
        
        genrePlayCount[i] = playCount;
        genrePlayCount['total'] += playCount;
        
        musicList.set(genre, genrePlayCount);
    }
    
    const answer = [...musicList.values()].sort((genre1, genre2) => {
        return genre2['total'] - genre1['total'];
    }).map((genre) => {
        const sortedGenre = Object.entries(genre).filter(([_musicNum, _]) => {
            return _musicNum !== 'total';
        }).sort(([_music1Num, music1Count], [_music2Num, music2Count]) => {
            if (music1Count === music2Count) {
                return _music1Num - _music2Num;
            }
            return music2Count - music1Count;
        })
        
        const musicList = sortedGenre.slice(0, 2).map(([_num, count]) => +_num);
        
        return musicList;
    }).flat();
    
    return answer;
}