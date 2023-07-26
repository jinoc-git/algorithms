function solution(numbers, k) {
  let idx = 0;
  const count = k * 2 - 1;
    
  if (numbers.length === count)  {
    idx = count - 1;
  } else {
    if(count % numbers.length === 0) {
      idx = numbers.length - 1;
    } else {
      idx = (count % numbers.length) - 1;
    }
  }

  return numbers[idx];
}