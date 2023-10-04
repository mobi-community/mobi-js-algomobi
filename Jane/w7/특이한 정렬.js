/*
[특이한 정렬]

정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 
이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
정수가 담긴 배열 numlist와 정수 n이 주어질 때 
numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (numlist, n) => {
  const abs = (num) => Math.abs(n - num);

  return numlist.sort((a, b) => {
    if (abs(a) > abs(b)) return 1;
    else if (abs(a) < abs(b)) return -1;
    else return a > b ? -1 : 1;
  });
};

// 위의 코드를 간단하게 정리한 답안!
function solution(numlist, n) {
  // 애초에 절대값으로 정렬하고 0일 경우 내림차순
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
