function solution(rsp) {
    let answer = '';
    for(let a of rsp) {
        let check = a;
        switch(check) {
            case '2': check = '0'
                break;
            case '0': check = '5'
                break;
            case '5': check = '2'
                break;
        }
        answer += check;
    }
    return answer;
}