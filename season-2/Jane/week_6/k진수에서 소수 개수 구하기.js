/*
@ 풀이 방법 생각하기
1. n을 toString(k)를 사용하여 진법 변환하기
2. 조건에 맞는 수 찾기
    - 해당 값이 0을 포함하지 않는 경우 해당 값 자체
    - 해당 값이 0을 포함할 경우 해당 값을 0으로 split하기
3. 조건에 맞는 수들 중 소수인 값 찾기
*/

const isPrimeNumber = (n) => {
  if (n == 1 || !n) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

function solution(n, k) {
  const target = n.toString(k);
  const splited = target.split("0");
  let result = 0;
  for (let num of splited) {
    if (isPrimeNumber(num)) result++;
  }
  return result;
}
