/*
qr code
문제 설명
두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

입출력 예
q	r	code	result
3	1	"qjnwezgrpirldywt"	"jerry"
1	0	"programmers"	"programmers"
*/

/*
i % q === r 조건을 push
*/

function solution(q, r, code) {
  var answer = [];
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) answer.push(code[i]);
  }
  return answer.join("");
}

// 테스트 코드가 더 빠르다
function solution(q, r, code) {
  return code
    .split("")
    .filter((v, i) => i % q === r)
    .join("");
}

console.log(solution(3, 1, "qjnwezgrpirldywt")); // jerry
console.log(solution(1, 0, "programmers")); // programmers
