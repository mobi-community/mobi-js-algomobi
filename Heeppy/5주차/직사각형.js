// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있다.
// 직사각형 네 꼭짓점의 좌표 [[x1,y1], [x2,y2], [x3,y3], [x4,y4]]가 담겨있는
// 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록
// solution 함수를 완성 해보세요.

function solution(dots) {
  dots.sort();
  xdot = Math.abs(dots[3][0] - dots[0][0]);
  ydot = Math.abs(dots[3][1] - dots[0][1]);
  return xdot * ydot;
}

solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
]);
