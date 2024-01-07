/*
컨트롤 제트
문제 설명
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

입출력 예
s	result
"1 2 Z 3"	4
"10 20 30 40"	100
"10 Z 20 Z 1"	1
"10 Z 20 Z"	0
"-1 -2 -3 Z"	-3
*/

/*
설계하기
Z가 없을 경우는 공백으로 split후 reduce로 누적값 계산
Z가 있는 경우, 반복문 돌려 Z를 찾고 Z의 인덱스 -1 값을 누적에서 제외하는 작업
*/

// function solution(s) {
//   const ctrlZ = s.split(" ");
//   if (ctrlZ.includes("Z")) { // 문자열에 Z가 포함되는 경우
//     let result = 0;
//     for (let i = 0; i < ctrlZ.length; i++) {
//       if (ctrlZ[i] === "Z") {
//         result -= Number(ctrlZ[i - 1]);
//       } else result += Number(ctrlZ[i]);
//     }
//     return result;
//   } else { // Z가 없는 경우는 reduce로 누적값 계산
//     return ctrlZ.reduce((acc, cur) => acc + Number(cur), 0);
//   }
// }

// 코드 줄여보기
function solution(s) {
  const ctrlZ = s.split(" ");
  return ctrlZ.reduce((acc, cur, idx) => {
    if (cur === "Z") return acc - Number(ctrlZ[idx - 1]);
    else return acc + Number(cur);
  }, 0);
}

console.log(solution("1 2 Z 3")); // 4
console.log(solution("10 20 30 40")); // 100
console.log(solution("10 Z 20 Z 1")); // 0
console.log(solution("-1 -2 -3 Z")); // -3
