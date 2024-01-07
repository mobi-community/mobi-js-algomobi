// [컨트롤 제트](https://school.programmers.co.kr/learn/courses/30/lessons/120853) /

function solution(s) {
  const tokens = s.split(" "); // 문자열 공백기준으로 나누기
  let result = 0;
  let stack = [];

  for (const token of tokens) {
    if (token === "Z") {
      // "Z"가 나오면 가장 최근추가값 빼기.
      const popped = stack.pop();
      result -= popped;
    } else {
      // "Z"가 아니면 : 넘버로해서 스택에 추가.
      const num = parseInt(token);
      stack.push(num);
      result += num;
    }
  }

  return result;
}

console.log(solution("1 2 Z 3")); // 4
console.log(solution("10 20 30 40")); // 100
console.log(solution("10 Z 20 Z 1")); // 1
console.log(solution("10 Z 20 Z")); // 0
console.log(solution("-1 -2 -3 Z")); // -3
