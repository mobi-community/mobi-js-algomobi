/*
@ 풀이 방법 생각하기
- 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수

1. name이 key, yearning이 value인 map 객체를 생성한다.
2. photo에 for문을 사용하여 추억 점수를 계산한다.
*/

function solution(name, yearning, photo) {
  const memoryMap = new Map();

  // 그리움 점수 map 생성
  for (let i = 0; i < name.length; i++) {
    memoryMap.set(name[i], yearning[i]);
  }

  const result = photo.map((people) =>
    people.reduce((sum, person) => {
      // 그리움 점수가 있을 때에는 더하고 없으면 0 더하기
      const point = memoryMap.get(person) ? memoryMap.get(person) : 0;
      return (sum += point);
    }, 0)
  );

  return result;
}
