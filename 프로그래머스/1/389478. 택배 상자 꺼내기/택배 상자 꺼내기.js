function solution(n, w, num) {
    const map = [];
    let answer = 0;
    let count = 1;
    let x = 0; 
    let y = 0;

    for (let i = 0; i < Math.ceil(n / w); ++i) {
        const row = [];
        for (let j = 0; j < w; ++j) {
            if (count > n) {
                row.push(null);
                continue;
            }

            if (count === num) {
                y = i;
                x = Math.ceil(count / w) % 2 === 0 ? w - j - 1 : j;
            }

            row.push(count);
            ++count;
        }

        if (i % 2 === 1) row.reverse();
        map.push(row);
    }

    while (y < map.length && map[y][x] !== null) {
        ++answer;
        ++y;
    }

    return answer;
}