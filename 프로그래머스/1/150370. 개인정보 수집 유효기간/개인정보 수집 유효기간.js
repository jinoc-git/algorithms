function solution(today, terms, privacies) {
    const answer = [];
    const [tYear, tMonth, tDay] = today.split('.');
    const termsMap = new Map();
    
    terms.forEach((item) => {
        const [key, val] = item.split(' ');
        termsMap.set(key, +val);
    })

    privacies.forEach((privacy, idx) => {
        const [date, privacyTerms] = privacy.split(' ');
        const [year, month, delDay] = date.split('.');
        const maxMonth = termsMap.get(privacyTerms);
        
        
        let delYear = +year + Math.floor(maxMonth / 12);
        let delMonth = +month + maxMonth % 12;

        if (delMonth > 12) {
            delYear += 1;
            delMonth %= 12;
        }

        if (delYear > +tYear) return;
        
        const isSameYear = delYear === +tYear;
        if (isSameYear && delMonth > +tMonth) return;

        const isSameMonth = delMonth === +tMonth;
        if (isSameYear && isSameMonth && +delDay > +tDay) return;
        
        answer.push(idx + 1);
    })
    
    return answer;
}