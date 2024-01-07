/*
구슬을 나누는 경우의 수
문제 설명
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

입출력 예
balls	share	result
3	2	3
5	3	10

서로 다른 n개 중 m개를 뽑는 경우의 수 공식
    n!
ㅡㅡㅡㅡㅡㅡ
(n-m)! x m!

*/

// 2, 3, 5, 6, 7 등 다수 실패 코드
// function solution(balls, share) {
//   // 팩토리얼 값을 구하는 함수
//   const factorial = (n) => n != 1 ? n * factorial(n - 1) : 1;

//   return factorial(balls) / (factorial(balls - share) * factorial(share));
// }

// 2, 3, 24 실패
// function solution(balls, share) {
//   const factorial = (n) => n != 1 ? n * factorial(n - 1) : 1;

//   return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
// }


function solution(balls, share) {
  const factorial = (n) => n ? n * factorial(n - 1) : 1;
  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}

console.log(solution(3, 2));
console.log(solution(5, 3));
