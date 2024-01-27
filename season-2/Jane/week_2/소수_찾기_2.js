/*
@ 풀이 방법 생각하기
1. 각 종이 조각들로 만들 수 있는 숫자 조합들을 구한다. (set 사용)
2. 에라토스테네스의 체 공식을 사용하여 해당 조합들 중 소수를 구한다.
*/

// 순열과 재귀함수로 가능한 모든 조합 추출하기 (set로 중복 제거, Number로 0으로 시작하는 값 제거)
const getNumSet = (str) => {
  const set = new Set();
  const generateCombinations = (cur, rem) => {
    // 맨 끝까지 가서 더 이상 조합이 불가능해지면 멈추기
    if (rem.length === 0) return;
    for (let i = 0; i < rem.length; i++) {
      // 한 자리 수를 더하기
      const next = rem[i];
      // 이전까지의 조합에 현재 수를 붙이기
      const newCurrent = cur + next;
      // 현재 숫자를 제외한 새로운 조합 생성 > 🌟 이 부분을 생각해내기 어려웠음
      const newRemaining = rem.slice(0, i) + rem.slice(i + 1);
      set.add(Number(next));
      set.add(Number(newCurrent));
      // 새로운 조합으로 다시 시작
      generateCombinations(newCurrent, newRemaining);
    }
  };

  generateCombinations("", str);
  return set;
};

// 소수인지 판단하는 함수
const isDec = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

function solution(numbers) {
  const com = [...getNumSet(numbers)];
  return com.filter((n) => isDec(n)).length;
}
