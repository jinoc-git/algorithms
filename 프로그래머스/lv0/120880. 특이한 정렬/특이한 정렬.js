function solution(numlist, n) {
    let answer = numlist.sort((a, b) => {
        if (Math.abs(n - a) - Math.abs(n - b) > 0) {
            return 1
        }
        if (Math.abs(n - a) - Math.abs(n - b) < 0) {
            return -1
        }
        if (Math.abs(n - a) - Math.abs(n - b) === 0) {
            return b - a > 0 ? 1 : -1
        }
    });



    return answer;
}


//     let small = [];
//     let big = [];
//     console.log(sortArr)
//     for (let i = 0; i < sortArr.length; i++) {
//         if (sortArr[i] <= n) {
//             small = [...sortArr].splice(0, i + 1).reverse();
//             big = [...sortArr].splice(i + 1) 
//         } else {
//             break;
//         }
//     }
//     console.log(small, big)
    
//     for (let i = 0; i < sortArr.length; i++) {
//         if (!small[i]) {
//             const etc = big.splice(i);
//             answer = [...answer, ...etc];
//             break;
//         }
//         if (!big[i]) {
//             const etc = small.splice(i);
//             answer = [...answer, ...etc];
//             break;
//         }
//         if (n - small[i] < big[i] - n) {
//             answer.push(small[i]);
//             answer.push(big[i]);
//         } else {
//             answer.push(big[i]);
//             answer.push(small[i]);
//         }
//     }