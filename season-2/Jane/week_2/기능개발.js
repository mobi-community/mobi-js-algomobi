/*
@ 풀이 방법 생각하기
1. progresses 배열에 map을 사용하여 남은 분량을 구한다.
2. 남은 분량을 speed로 나눈 뒤 올림한 값을 구한다.
3. for문을 돌린다.
  - 분량 배열을 순회하면서 기준 값보다 작을 때까지 cnt를 더한다.
  - 큰 값을 만나면 반복을 멈추고 그전까지의 cnt를 결과 배열에 담는다.
  - 배열에 담긴 부분까지 건너뛴 뒤 반복을 다시 시작한다.
*/

function solution(progresses, speeds) {
  const red = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );
  const result = [];
  for (let i = 0; i < red.length; i++) {
    let cnt = 1;
    for (let j = i + 1; j < red.length; j++) {
      if (red[i] >= red[j]) {
        cnt++;
      } else {
        break;
      }
    }
    result.push(cnt);
    i += cnt - 1;
  }

  return result;
}
