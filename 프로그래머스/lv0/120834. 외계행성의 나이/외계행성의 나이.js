function solution(age) {
  let answer = "";
  let str = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  for (let a of String(age)) {
    answer += str[a];
  }
  return answer;
}