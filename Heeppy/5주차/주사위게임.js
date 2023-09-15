// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다.
// 세 주사위를 굴렸을 때 나온 숫자를 각각 a,b,c라고 했을 때 얻는 점수는 다음과 같다.

function solution(a, b, c) {
  const set = (array) => [...new Set(array)];
  const arr = set([a, b, c]);
  if (arr.length == 3) {
    return a + b + c;
  } else if (arr.length == 2) {
    return (a + b + c) * (a * a + b * b + c * c);
  } else if (arr.length == 1) {
    return (
      (a + b + c) *
      (a * a + b * b + c * c) *
      (a * a * a + b * b * b + c * c * c)
    );
  }
}
