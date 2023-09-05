// [진료순서 정하기](https://school.programmers.co.kr/learn/courses/30/lessons/120835)

function solution(emergency) {
  // 내림차순 정렬, 해당 원소의 인덱스를 추적하는 맵 생성
  const sortedEmergency = emergency.slice().sort((a, b) => b - a);
  const indexMap = new Map(sortedEmergency.map((value, index) => [value, index + 1]));

  // 정렬된 응급도에 따라 진료 순서구하기
  const result = emergency.map((value) => indexMap.get(value));

  return result;
}

const emergency1 = [3, 76, 24];
console.log(solution(emergency1)); // [3, 1, 2]

const emergency2 = [1, 2, 3, 4, 5, 6, 7];
console.log(solution(emergency2)); // [7, 6, 5, 4, 3, 2, 1]

const emergency3 = [30, 10, 23, 6, 100];
console.log(solution(emergency3)); // [2, 4, 3, 5, 1]
