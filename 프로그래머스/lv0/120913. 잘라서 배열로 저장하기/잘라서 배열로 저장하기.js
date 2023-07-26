// 1.
// function solution(my_str, n) {
//   const answer = [];
//   const strArr = my_str.split('').reduce((acc, cur, i) => {
//     if (acc.length === n - 1) {
//       acc += cur;
//       answer.push(acc);
//       acc = '';
//       return acc;
//     }
//     if (i === my_str.length - 1) {
//       acc += cur;
//       answer.push(acc);
//       return acc;
//     }
//     acc += cur;
//     return acc;
//   }, '');

//   return answer;
// }


// 2
function solution(my_str, n) {
  const answer = [];
  let str = '';
  for (let i = 0; i < my_str.length; i++) {
    str += my_str[i];
    if (str.length === n) {
      answer.push(str);
      str = '';
    }
    if (i === my_str.length - 1 && str !== '') {
      answer.push(str);
    }
  }

  return answer;
}