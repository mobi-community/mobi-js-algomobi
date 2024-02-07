/*
@ 풀이 방법 생각하기
1. 의상 종류별 MAP 생성하기
2. 해당 MAP을 기준으로 조합 구하기

a: 2 b: 1 / (2 + 1 + 2 * 1)
a: 3 b: 1 / (3 + 1 + 3 * 1)
a: 2 b: 2 c: 1 / (2 + 2 + 1, 2 * 2, 2 * 1, 2 * 1, 2 * 2 * 1) 5 + 12

- 원래는 조합을 구한 뒤 각 조합을 reduce로 곱한 것을 모두 reduce로 더하는 방식을 사용했다. 이때에도 답은 제대로 나왔으나 한 테스트 케이스에서 시간 초과 오류가 발생했다.
- 공식을 단순히 각 (카테고리 별 의상의 수) + 1을 모두 곱한 뒤 아무 것도 입지 않은 경우의 수만 빼주는 방식으로 수정해서 통과할 수 있었다.

*/

const getClothesCnt = (arr) => {
  const map = new Map();
  const result = [];
  for (let [name, category] of arr) {
    if (map.has(category)) {
      map.set(category, map.get(category) + 1);
    } else {
      map.set(category, 1);
    }
  }
  for (let [_, value] of map) result.push(value);
  return result;
};

function solution(clothes) {
  const cnt = getClothesCnt(clothes);
  const result = cnt.reduce((m, n) => m * (n + 1), 1);

  return result - 1;
}

// 이전 코드
// const getClothesCnt = (arr) => {
//   const map = new Map();
//   const result = [];
//   for (let [name, category] of arr) {
//     if (map.has(category)) {
//       map.set(category, map.get(category) + 1);
//     } else {
//       map.set(category, 1);
//     }
//   }
//   for (let [_, value] of map) result.push(value);
//   return result;
// };

// const getCombination = (arr) => {
//   const result = [];
//   const combine = (idx, cur) => {
//     if (idx === arr.length) {
//       result.push(cur.slice());
//       return;
//     }
//     combine(idx + 1, cur);
//     combine(idx + 1, cur.concat(arr[idx]));
//   };
//   combine(0, []);
//   result.shift();
//   return result;
// };

// function solution(clothes) {
//   const arr = getClothesCnt(clothes);
//   console.log(arr);
//   const combination = getCombination(arr);
//   const reducedArr = combination.map((arr) => arr.reduce((m, n) => m * n));

//   return reducedArr.reduce((sum, num) => sum + num);
// }
