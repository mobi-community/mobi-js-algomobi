/*
@ 풀이 방법 생각하기
1. n행 n열 크기의 2차원 배열 만들기 -> array.from과 map을 사용하여 배열 안에 배열이 있는 형태로 만들기
2. 값 채우기
     0 1 2
    ======
 0 | 1 2 3
 1 | 2 2 3
 2 | 3 3 3

3. 새로운 1차원 배열로 만들기 => flatmap
4. left부터 (right+1)까지만 slice해서 return

> 위와 같이 처음부터 모든 배열의 인덱스를 순회하도록 하면 시간 초과 에러가 발생한다.
x좌표: n으로 나눴을 때의 몫
y좌표: n으로 나눴을 때의 나머지
*/

function solution(n, left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    result.push(Math.max(Math.floor(i / n) + 1, (i % n) + 1));
  }
  return result;
}
