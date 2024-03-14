/*
@ 풀이 방법 생각하기
1. stage 배열을 생성한다.
2. 해당 배열에 map을 돌려 실패율이 담긴 실패율 배열을 생성한다. (filter로 통과하지 못한 사용자 / 도달한 사용자)
3. stage 배열을 실패율 배열을 기준으로 정렬한다.
*/

function solution(N, stages) {
  const stage = Array.from({ length: N }, (_, i) => i + 1);
  const failureRate = stage.map(
    (n) =>
      stages.filter((v) => v === n).length / stages.filter((v) => v >= n).length
  );
  stage.sort((a, b) => failureRate[b - 1] - failureRate[a - 1]);

  return stage;
}
