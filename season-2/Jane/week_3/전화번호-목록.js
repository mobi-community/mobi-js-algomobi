/*
@ 풀이 방법 생각하기
1. 배열을 순회하며 해당 값이 다른 값들에 포함되어 있는지 확인합니다.
2. 만약 비교하려는 값이 비교당하는 값의 길이보다 길면 바로 continue;
3. 해당하는 값이 있으면 false를 early return, 해당하는 결과가 없으면 true를 그대로 반환하도록 합니다.
*/

function solution(p) {
  p.sort();
  for (let i = 0; i < p.length - 1; i++) {
    if (p[i + 1].slice(0, p[i].length) === p[i]) {
      return false;
    } else continue;
  }
  return true;
}
