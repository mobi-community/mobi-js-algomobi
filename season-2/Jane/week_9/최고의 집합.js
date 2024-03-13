/*
@ 풀이 방법 생각하기
1. 1-9로 이루어진 배열에 조합을 생성하는 재귀 함수를 구현한다.
    - 해당 함수는 배열을 돌며 가능한 n자리의 배열을 모두 생성한다.
    - 이때 합이 s인 배열만 sum 배열에 담는다.
2. sum 배열의 길이가 0이라면 [-1]을 반환한다.
3. sum 배열에 반복문을 돌려 곱이 최대가 되는 집합을 구한다. 
    - 최대값인 배열의 인덱스와 해당 배열의 곱인 calc를 저장한다.
    - 더 큰 값이 나오면 해당 값으로 바꾼다.
4. 인덱스에 해당하는 배열을 반환한다.
*/

// solution1 > 시간 초과 오류
const getComb = (arr, target) => {
  if (target === 1) return arr.map((val) => [val]);

  const comb = [];
  const satisfied = [];
  for (let i = 0; i < arr.length; i++) {
    const sliced = arr.slice(i);
    const newArr = getComb(sliced, target - 1);
    const attached = newArr.map((v) => [arr[i], ...v]);
    comb.push(attached);
  }
  return comb;
};

function solution(n, s) {
  const numArr = Array.from({ length: s - 1 }, (_, i) => i + 1);
  const combinations = getComb(numArr, n)
    .flat()
    .filter((v) => v.reduce((sum, num) => sum + num) === s);
  if (!combinations.length) return [-1];

  // 곱이 최대가 되는 집합 찾기
  let idx = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < combinations.length; i++) {
    const multiplied = combinations[i].reduce((m, num) => m * num);
    if (multiplied > max) {
      max = multiplied;
      idx = i;
    } else continue;
  }

  return combinations[idx].sort((a, b) => a - b);
}

// solution2
/*
1. s를 n으로 나눈 몫과 가장 가까운 값끼리의 곱이 가장 크다.
2. 나머지가 없으면 해당 값으로만 채워진 배열이 된다.
3. 나머지가 있다면
    - 나머지 만큼은 (몫과 가장 가까운 값) + 1로 채워지고
    - (n - 나머지) 만큼은 (몫과 가장 가까운 값)으로 채워진다.
4. 나눠지지 않는다면 [-1]을 반환한다.
*/
const solution = (n, s) => {
  const calc = Math.floor(s / n);
  const red = s % n;
  if (!calc) return [-1];
  if (red === 0) return Array.from({ length: n }, () => calc);

  const small = Array.from({ length: n - red }, () => calc);
  const large = Array.from({ length: red }, () => calc + 1);
  return small.concat(large);
};
