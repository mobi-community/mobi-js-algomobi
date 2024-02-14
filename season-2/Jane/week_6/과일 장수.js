/*
@ 풀이 방법 생각하기
1. 사과 score를 크기 순으로 정렬합니다. (내림차순)
2. for문을 사용하여 score의 길이 / m만큼 돌립니다.
    - 이때 target = score.splice(0, m) > 시간 초과 발생
    - result에 target 중 최솟값 * m을 더합니다.
*/

function solution(k, m, score) {
  if (score.length < m) return 0;
  score.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < score.length; i += m) {
    // splice 대신 slice를 사용하도록 수정하였더니 해결되었다.
    const target = score.slice(i, i + m);
    if (target.length < m) continue;
    result += Math.min(...target) * m;
  }

  return result;
}
