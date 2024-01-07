/*
[구슬을 나누는 경우의 수]
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 
구슬은 모두 다르게 생겼습니다. 
머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 
solution 함수를 완성해주세요.

@ HINT
서로 다른 n 개 중 m 개 고르는 방법
    n!
-----------
(n-m)! X m!
- Math.floor 사용할 경우 에러 > Math.round로 반올림해줘야 함
*/

const solution = (balls, share) => {
  const factorial = (num) => {
    let result = 1;
    for (let i = num; i > 0; i--) {
      result = result * i;
    }
    return result;
  };
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
};

console.log(solution(3, 2));
console.log(solution(30, 10));
