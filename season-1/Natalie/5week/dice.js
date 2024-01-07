// https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
  let result = 0;

  if (a !== b && b !== c && a !== c) {
    result = a + b + c;
  } else if (a === b && b === c) {
    result = (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
  } else {
    const sumOfSquares = a ** 2 + b ** 2 + c ** 2;
    result = (a + b + c) * sumOfSquares;
  }

  return result;
}
