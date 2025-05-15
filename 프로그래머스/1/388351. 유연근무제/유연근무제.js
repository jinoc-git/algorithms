function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    for (let i = 0; i < schedules.length; i++) {
        let fullSafe = true;
        const targetTime = schedules[i];
        const arrivalTimes = timelogs[i];
        const safeTime = getSafeTime(targetTime);

        for (let j = 0; j < arrivalTimes.length; j++) {
            const isWeekend = [0, 6].includes((startday + j) % 7);
            if (isWeekend) continue;
            
            const isLate = safeTime < arrivalTimes[j];
            if (isLate) {
                fullSafe = false;
                break;
            }
        }
        
        if (fullSafe) answer++;
    }
    
    return answer;
}

const getSafeTime = (targetTime) => {
    let result = 0;

    const hour = Math.floor(targetTime / 100);
    const minute = targetTime % 100;
    
    const hopeMinute = minute + 10;
    if (hopeMinute >= 60) {
        result = (hour + 1) * 100 + (hopeMinute - 60);
    } else {
        result = hour * 100 + hopeMinute;
    }
    
    return result;
}