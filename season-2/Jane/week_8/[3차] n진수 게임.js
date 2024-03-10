/*
@ 풀이 방법 생각하기
1. while 반복문을 돌리되 반환할 값인 tube의 길이가 t와 같아지면 종료한다.
2. 변환 대상인 숫자를 나타내는 cur을 생성한다.
3. 반복문이 돌아갈 때 해당 값을 n진법으로 변환한 값을 whole 변수에 붙인다.
4. 해당 값을 split("")한다. > 이 값을 m으로 나눴을 때 p번째의 값을 tube에 붙인다.
5. 이후 게임에 참가하는 인원 만큼의 값을 whole에서 지운다.
*/

function solution(n, t, m, p) {
  let whole = "";
  let tube = "";
  let cur = 0;

  while (tube.length !== t) {
    const trans = cur.toString(n).toUpperCase();
    whole += trans + "";
    if (whole.length < m) {
      cur++;
      continue;
    } else {
      const target = whole.split("").slice(0, m);
      tube += target[p - 1];
      whole = whole.slice(m);
      cur++;
    }
  }

  return tube;
}
