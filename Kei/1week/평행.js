/*
평행
문제 설명
점 네 개의 좌표를 담은 이차원 배열 dots가 다음과 같이 매개변수로 주어집니다.

[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

입출력 예
dots	result
[[1, 4], [9, 2], [3, 8], [11, 6]]	1
[[3, 5], [4, 1], [2, 4], [5, 10]]	0
*/

/*
어떻게 풀지 사고하기
평행인 조건?
- 기울기가 같아야 한다. -> y좌표 변화량 % x좌표 변화량
- 경우의 수 (0, 1 / 2, 3) / (0, 2 / 1, 3) / (0, 3 / 1, 2)
- 반복문, [dots[0][0], dots[0][1]], [dots[1][0], dots[1][1]], [dots[2][0], dots[2][1]], [dots[3][0], dots[3][1]]
*/

// 실패한 코드
// function solution(dots) {
//   let arr = [];
//   for (let i = 0; i < dots.length; i++) {
//     for (let j = i + 1; j < dots.length; j++) {
//       const test = dots[i][1] - dots[j][1] / dots[i][0] - dots[j][0]; // 기울기
//       if (arr.includes(test)) return 1;
//       arr.push(test);
//     }
//   }
//   return 0;
// }

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 1
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
); // 0
