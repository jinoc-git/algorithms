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
        const sortedGenre = Object.entries(genre).filter(([idx, _]) => {
            return idx !== 'total';
        }).sort((music1, music2) => {
            if (music1[1] === music2[1]) {
                return music1[0] - music2[0];
            }
            return music2[1] - music1[1];
        })
        
        const musicList = sortedGenre.slice(0, 2).map(([idx, count]) => +idx);
        
        return musicList;
    }).flat();
    
    return answer;
}