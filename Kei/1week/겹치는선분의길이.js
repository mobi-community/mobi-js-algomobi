/*
겹치는 선분의 길이
문제 설명
선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.

입출력 예
lines	result
[[0, 1], [2, 5], [3, 9]]	2
[[-1, 1], [1, 3], [3, 9]]	0
[[0, 5], [3, 9], [1, 10]]	8
*/

/*
1. 배열의 각 요소를 start에서 end까지 fill로 채우기, 각 요소의 배열값 비교하여 겹치는 수의 개수 - 1
*/

// 실패 코드
// function solution(lines) {
//   const min = Math.min(...lines.map(([start, _]) => start));
//   const max = Math.max(...lines.map(([_, end]) => end));

//   const newLine = Array(max - min + 1).fill(0);

//   for (const [start, end] of lines) {
//     for (let i = start; i <= end; i++) {
//       newLine[i - min]++;
//     }
//   }

//   let overlappingLength = 0;
//   for (const length of newLine) {
//     if (length >= 2) {
//       overlappingLength++;
//     }
//   }

//   return overlappingLength - 1;
// }

/*
Array.fill(200) : -100 ~ 100
*/
function solution(lines) {
  // 길이가 200인 배열을 0으로 초기화
  let line = new Array(200).fill(0);

  // 각 선분 처리
  lines.forEach(([min, max]) => {
    // 선분의 시작과 끝 값을 순회하면서 배열의 특정 구간을 증가시킨다.
    for (; min < max; min++) {
      // 선분의 시작부터 끝까지 해당 인덱스에 1을 더한다.
      // 이때, 인덱스가 음수가 될 수 있기 때문에 100을 더해 양수로 만들어준다.
      line[min + 100]++;
    }
  });

  // 배열에서 2이상인 요소만 필터링한 개수를 리턴
  return line.filter((v) => v > 1).length;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
console.log(
  solution([
    [-1, 1], // -1 0 1
    [1, 3], // 1 2 3
    [3, 9], // 3 4 5 6 7 8 9
  ])
);
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
);
