/*
@ 풀이 방법 생각하기
1. 2부터 시작하는 for문을 돌린다.
2. Math.sqrt(i)까지 도는 두 번째 for문을 돌린다.
3. 이때 i/j === 0이면 flag를 false; 아니라면 result++
>> 문제 풀이는 되지만 시간 초과 오류 발생

* 에라토스테네스의 체 방식 사용하기
1. 배열을 생성하여 초기화한다.
2. 2부터 시작해서 특정 수의 배수에 해당하는 수를 모두 지운다.(지울 때 자기자신은 지우지 않고, 이미 지워진 수는 건너뛴다.)
3. 2부터 시작하여 남아있는 수를 모두 출력한다.

*/

function solution(n) {
  let result = Array.from({ length: n + 1 }, (_, i) => i);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = i * 2; j < result.length; j += i) {
      if (result[j] === 0) continue;
      if (result[j] % i === 0) result[j] = 0;
    }
  }

  return result.filter((n) => n > 1).length;
}
