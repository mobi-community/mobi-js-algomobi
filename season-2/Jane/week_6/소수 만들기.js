/*
@ 풀이 방법 생각하기
1. nums로 가능한 모든 조합의 합이 담긴 배열을 구한다.
2. 소수 판별 함수를 사용하여 소수일 때만 result ++
*/

const getCombinations = (arr, cnt) => {
  const result = [];
  if (cnt === 1) return arr.map((el) => [el]);

  arr.forEach((el, idx, originArr) => {
    const restArr = originArr.slice(idx + 1);
    const comb = getCombinations(restArr, cnt - 1);
    const attachTarget = comb.map((combination) => [el, ...combination]);
    result.push(...attachTarget);
  });

  return result;
};

const isPrimeNum = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// 3개씩 묶은 조합 중에서 각 요소들의 합이 소수인 것들로만 filter한 결과의 길이 구하기
const solution = (nums) =>
  getCombinations(nums, 3).filter((comb) =>
    isPrimeNum(comb.reduce((sum, num) => sum + num))
  ).length;
