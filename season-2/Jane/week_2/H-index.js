/*
@ 풀이 방법 생각하기

[sort 사용한 방법]
1. n = citations.length
2. citations를 내림차순으로 정렬한다.
3. citations에서 Math.floor(n/2)에 해당하는 값부터 이동한다.
4. 기준점을 움직이며 해당 위치의 값이 해당 인덱스 값 이상인지 확인한다.
5. 조건을 충족하지 못하게 되면 멈추고 이전 값을 반환한다.
*/

function solution(citations) {
  citations.sort((a, b) => b - a);
  // [0, 0, 0, 0, 0]인 경우 예외처리
  if (citations[0] === 0) return 0;
  const n = citations.length;
  let h;
  for (let i = 1; i <= n; i++) {
    if (citations[i] <= i) {
      h = i;
      break;
    }
  }

  return h ? h : n;
}
