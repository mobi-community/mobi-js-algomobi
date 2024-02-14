/*
@ 풀이 방법 생각하기
- 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매
- 다만 공격력의 제한 수치보다 큰 공격력의 무기를 구매해야 할 경우 > 협약기관에서 정한 공격력을 가진 무기를 구매
> 무기를 만들기 위해 필요한 철의 무게 구하기 (공격력 1당 1kg)

1. number만큼 반복하는 for문을 돌려 i의 약수로 구성된 배열을 생성합니다.
    - 이때 약수의 개수가 limit보다 클 경우 약수의 개수 대신 power 값을 push합니다.
2. reduce를 사용하여 배열 요소들의 값을 더해 무기를 만들기 위해 필요한 총 무게를 계산합니다.
*/

const getDivisorCnt = (num) => {
  let cnt = new Set();

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      cnt.add(i);
      cnt.add(num / i);
    }
  }
  return cnt.size;
};

function solution(number, limit, power) {
  const answer = [];
  for (let i = 1; i <= number; i++) {
    const divisors = getDivisorCnt(i);
    answer.push(divisors > limit ? power : divisors);
  }
  return answer.reduce((sum, num) => sum + num);
}
