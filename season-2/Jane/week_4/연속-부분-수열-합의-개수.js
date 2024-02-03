/*
@ 풀이 방법 생각하기
1. 배열의 각 요소들로 가능한 조합을 구한다.
    - 원형 + 연속이므로 조합이 다음과 같이 나온다.
    7 79 791 7911 79114
    9 91 911 9114 91147
    1 11 114 1147 11479
    1 14 147 1479 14791
    4 47 479 4791 47911 
2. 조합 내부 합계를 set에 담아 중복을 제거한 뒤의 개수를 구한다.
*/

// 효율성이 말도 안 되게 낮지만,, 원인을 찾지 못하겠다.
function solution(elements) {
  let result = [];
  for (let i = 1; i <= elements.length; i++) {
    let cur = [];
    for (let j = 0; j < elements.length; j++) {
      const idx = (j + i) % elements.length;
      const n = cur.concat(elements[idx]);
      result.push(n.reduce((s, n) => s + n));
      cur = n;
    }
  }
  const filter = new Set(result);
  return filter.size;
}
