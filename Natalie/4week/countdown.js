//https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start_num, end_num) {
  if (start_num < end_num) {
    return [];
  }

  const result = [];
  while (start_num >= end_num) {
    result.push(start_num);
    start_num--;
  }

  return result;
}
