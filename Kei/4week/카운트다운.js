/*
카운트 다운
문제 설명
정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

입출력 예
start_num	end_num	result
10	3	[10, 9, 8, 7, 6, 5, 4, 3]
*/

function solution(start, end_num) {
  let answer = [];
  for (let i = start; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}

// 다른 풀이 1
function solution(start, end_num) {
  return Array(start - end_num + 1)
    .fill(start)
    .map((v, i) => v - i);
}

// 다른 풀이 2
function solution(start, end) {
  return Array.from(Array(start - end + 1), (_, i) => start - i);
}

console.log(solution(10, 3)); // [10, 9, 8, 7, 6, 5, 4, 3]
