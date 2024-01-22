/*
@ 풀이 방법 생각하기
1. 각 참가자가 찍는 정답이 담긴 배열을 생성한다.
2. answers의 길이만큼 for문을 돌린다.
    - sum1, sum2, sum3 변수에 합을 저장한다. > 마지막에 Math.max 반환
    - (i % 각 배열의 길이) 사용
*/

function solution(answers) {
  const s = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const sum = [0, 0, 0];
  const len = [s[0].length, s[1].length, s[2].length];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < sum.length; j++) {
      sum[j] += answers[i] === s[j][i % len[j]];
    }
  }
  // 가장 높은 점수
  const max = Math.max(...sum);
  const result = [];
  for (let i = 0; i < sum.length; i++) {
    if (sum[i] === max) result.push(i + 1);
  }

  return result;
}
