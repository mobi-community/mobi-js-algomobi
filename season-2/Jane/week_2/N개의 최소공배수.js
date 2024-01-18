/*
@ 풀이 방법 생각하기

1. 배열 중 가장 큰 수부터 시작한다.
2. while문을 사용하여 최소공배수가 구해지면 멈춘다.
3. 1씩 더하며 반복한다.
*/

function solution(arr) {
  let LCM = Math.max(...arr);

  while (true) {
    if (arr.every((el) => LCM % el === 0)) break;
    LCM++;
  }

  return LCM;
}
