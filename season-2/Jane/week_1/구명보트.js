/*
@ 풀이 방법 생각하기
[시간 초과 에러 발생]
1. people을 내림차순으로 정렬한다.
2. 제일 큰 수를 기준으로 잡고 더해서 limit 이하인 수를 찾는다.
3. 해당하는 숫자가 있다면 배열에서 둘을 제거하고, 아니라면 기준 숫자만 제거한 뒤 cnt에 1을 더한다.
4. 배열의 길이가 0이 될 때까지 반복한다.
======================================================================================
[다른 풀이 방법]
불필요한 반복문과 splice를 사용하지 않는 방법을 고민하다가 생각해낸 방식
1. 가장 큰 수를 나타내는 변수 heavy와 가장 작은 수를 나타내는 변수 light을 생성한다.
2. heavy가 light보다 커지지 않을 때까지 반복한다.
3. 만약 people[heavy]와 people[light]의 합이 limit보다 작다면 heavy를 하나 증가시킨다.
4. light은 모든 경우에 하나씩 감소한다.
5. cnt는 모든 경우에 하나씩 증가한다.
6. cnt를 반환한다.
*/

function solution(people, limit) {
  let cnt = 0;
  let lightest = 0;
  let heaviest = people.length - 1;

  people.sort((a, b) => a - b);

  while (lightest <= heaviest) {
    if (people[lightest] + people[heaviest] <= limit) lightest++;
    heaviest--;
    cnt++;
  }

  return cnt;
}

/*
@ 풀이하고 나서,,

처음에 로직 생각하는데도 오래 걸렸고,
불필요하게 변수 선언과 반복문을 남발했더니 효율성 테스트를 통과하지 못했었다.
의식의 흐름대로 문제를 풀지 말자..!
*/
