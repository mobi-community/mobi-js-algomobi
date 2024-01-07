/*
직사각형 넓이 구하기
문제 설명
2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

입출력 예
dots	result
[[1, 1], [2, 1], [2, 2], [1, 2]]	1
[[-1, -1], [1, 1], [1, -1], [-1, 1]]	4
*/
/*
반복문(map), 절댓값이 가장 큰 것, (xn(max) - xm(min)) * (yn(max) - ym(min))
*/

function solution(dots) {
  const maxX =
    Math.max(...dots.map((v) => v[0])) - Math.min(...dots.map((v) => v[0]));
  // ex) v[0] = [-1, 1, 1, -1], maxX = 1 - (-1) = 2
  const maxY =
    Math.max(...dots.map((v) => v[1])) - Math.min(...dots.map((v) => v[1]));
  // ex) v[1] = [-1, 1, -1, 1], maxY = 1 - (-1) = 2

  return maxX * maxY;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
