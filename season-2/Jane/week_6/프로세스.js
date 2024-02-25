/*
@ 풀이 방법 생각하기
[운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지]
1. map을 사용하여 우선순위와 위치값이 담긴 배열을 생성한다.
    - 원래는 별도의 배열로 관리하려 했으나 로직이 너무 꼬일 것 같아서 포기하였다.
2. while문을 사용하여 반복한다.
    - 만약 맨 앞에서 꺼낸 값의 우선 순위가 가장 높지 않다면 해당 값은 맨 뒤에 넣고 앞에서부터 다시 찾는다.
    - 우선 순위가 가장 높다면 cnt를 더해준다.
    - 만약 우선 순위가 가장 높으면서 idx 값이 location과 동일한 경우 반복을 멈추고 그때까지의 cnt 값을 반환한다.
*/

function solution(priorities, location) {
  let cnt = 0;
  const arr = priorities.map((x, i) => ({ priority: x, idx: i }));

  while (arr.length) {
    const val = arr.shift();
    // some 방식이 아니라 else문에서 매번 원본 priorities를 splice하고
    // Math.max()를 사용하려고 하니 값은 동일하게 나오나 시간 초과 오류가 발생하였음
    const isNotMax = arr.some((x) => x.priority > val.priority);
    if (isNotMax) {
      arr.push(val);
    } else {
      cnt++;
      if (val.idx === location) break;
    }
  }

  return cnt;
}
