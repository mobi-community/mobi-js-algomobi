// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const result = [];
  const length = arr.length;

  result.push(arr[0]);

  for (let i = 1; i < length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}
