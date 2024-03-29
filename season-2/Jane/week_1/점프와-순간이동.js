/*

01: 1
02: 1 () 2
03: 1 () 2 3
04: 1 () 2 () 4
05: 1 () 2 () 4 5
06: 1 () 2 3 () 6
07: 1 () 2 3 () 6 7

@ 풀이 방법 생각하기
1. 짝수일 경우 2로 나누고 홀수일 경우 1을 뺀 후 usage 변수에 1을 더한다.

*/

function solution(n) {
  let sum = 0;

  while (n > 0) {
    if (n % 2) {
      sum += 1;
      n -= 1;
    } else {
      n = n / 2;
    }
  }

  return sum;
}
