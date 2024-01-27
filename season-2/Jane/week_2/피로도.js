/*
@ 풀이 방법 생각하기
- 피로도 시스템 (0 이상의 정수)
- 최소 필요 피로도(need): 해당 던전 탐험을 위해 가져야 하는 최소한의 피로도
- 소모 피로도(used): 던전 탐험 후 소모된 피로도
- 1 <= 던전의 개수 <= 8
> 탐험할 수 있는 최대 던전 수 구하기

1. 가능한 조합들에 대한 순열 배열을 생성한다. 
2. 재귀함수를 사용하여 가능한 모든 조합에 대한 탐색을 진행한다.
3. 현재 피로도를 나타내는 변수를 사용하여 현재 피로도가 최소 필요 피로도보다 작아질 경우 break하고 max와 비교
*/

// 순열을 만들어주는 함수
const getPerm = (perm, rest, result) => {
  if (rest.length === 0) return result.push(perm);
  for (let i = 0; i < rest.length; i++) {
    const newRest = [...rest.slice(0, i), ...rest.slice(i + 1)];
    getPerm([...perm, rest[i]], newRest, result);
  }
};

const solution = (k, dungeons) => {
  const perm = [];
  let result = 0;
  getPerm([], dungeons, perm);
  for (let i = 0; i < perm.length; i++) {
    let fatigue = k;
    let sum = 0;
    for (let j = 0; j < dungeons.length; j++) {
      const target = perm[i][j];
      if (fatigue < perm[i][j][0]) {
        continue;
      } else {
        fatigue -= perm[i][j][1];
        sum++;
      }
      result = Math.max(sum, result);
    }
  }

  return result;
};
