// 점 네개의 좌표를 담은 이차원 배열 dots가 다음과 같이 매개변수로 주어진다.
// [[x1, y1], [x2,y2],[x3,y3],[x4,y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때,
// 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성하라

// 경우의 수 :

let dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];

const xarr = [];
const yarr = [];

// 배열의 x축 뽑기
function XDots(dots) {
  for (let i = 0; i < dots.length; i++) {
    const xdot = dots[i];
    xarr.push(xdot[0]);
  }
  return xarr;
}

// 배열의 y축 뽑기
function YDots(dots) {
  for (let i = 0; i < dots.length; i++) {
    const ydot = dots[i];
    yarr.push(ydot[1]);
  }
  return yarr;
}

// x축 비교 y축 비교
function solution(dots) {
  XDots(dots);
  YDots(dots);
  if (
    xarr[0] - xarr[1] == xarr[2] - xarr[3] &&
    yarr[0] - yarr[1] == yarr[2] - yarr[3] &&
    xarr[0] - xarr[1] !== 0 &&
    xarr[2] - xarr[3] !== 0 &&
    yarr[0] - yarr[1] !== 0 &&
    yarr[2] - yarr[3] !== 0
  )
    return 1;
  else if (
    xarr[0] - xarr[2] == xarr[1] - xarr[3] &&
    yarr[0] - yarr[2] == yarr[1] - yarr[3] &&
    xarr[0] - xarr[2] !== 0 &&
    xarr[1] - xarr[3] !== 0 &&
    yarr[0] - yarr[2] !== 0 &&
    yarr[1] - yarr[3] !== 0
  )
    return 1;
  else if (
    xarr[0] - xarr[3] == xarr[1] - xarr[2] &&
    yarr[0] - yarr[3] == yarr[1] - yarr[2] &&
    xarr[0] - xarr[3] !== 0 &&
    xarr[1] - xarr[2] !== 0 &&
    yarr[0] - yarr[3] !== 0 &&
    yarr[1] - yarr[2] !== 0
  )
    return 1;
  else return 1;
}

solution([
  [1, 4],
  [1, 0],
  [3, 0],
  [3, 4],
]);
