// [저주의 숫자 3](https://school.programmers.co.kr/learn/courses/30/lessons/120871) /

function solution(n) {
  const forbiddenDigits = ["3"];
  let count = 0;
  let num = 1;

  while (count < n) {
    let numStr = num.toString();

    if (numStr.includes("3") || num % 3 === 0) {
      num++;
      continue;
    }

    count++;
    num++;
  }

  return num - 1;
}

console.log(solution(15)); // 25
console.log(solution(40)); // 76
