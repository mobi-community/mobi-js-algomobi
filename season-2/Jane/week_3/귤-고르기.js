/*
@ 풀이 방법 생각하기
1. map 타입을 사용해서 각 크기에 해당하는 귤이 몇 개인지 저장한다.
2. 많은 순으로 정렬한 뒤 순서대로 k가 찰 때까지 담는다.
3. cnt에 종류가 바뀔 때마다 ++ 해준 뒤 해당 값을 반환한다.
*/

const makeMap = (str) => {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    const key = str[i];
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  return map;
};

function solution(k, tangerine) {
  const sortedMap = [...makeMap(tangerine)].sort(
    ([key1, val1], [key2, val2]) => val2 - val1
  );
  let cnt = 0;

  for ([_, val] of sortedMap) {
    if (k <= 0) break;
    k -= val;
    cnt++;
  }

  return cnt;
}
