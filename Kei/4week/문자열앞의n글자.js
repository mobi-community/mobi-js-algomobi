/*
문자열의 앞의 n글자
문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

입출력 예
my_string	n	result
"ProgrammerS123"	11	"ProgrammerS"
"He110W0r1d"	5	"He110"
*/

function solution(my_string, n) {
  return my_string.slice(0, n);
}

console.log(solution("ProgrammerS123", 11));
console.log(solution("He110W0r1d", 5));
