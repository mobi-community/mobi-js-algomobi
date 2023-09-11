/*
선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.
*/

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

function Solution(dots) {
  XDots(dots);
  YDots(dots);
  // 선분끼리 겹친 개수 2번
  if (
    xarr[1] <= xarr[0] &&
    xarr[0] <= yarr[1] &&
    xarr[2] <= xarr[0] &&
    xarr[0] <= yarr[2]
  ) {
    return console.log(yarr[1] - xarr[0] + (yarr[2] - xarr[0]));
  } else if (
    xarr[0] <= xarr[1] &&
    xarr[1] <= yarr[0] &&
    xarr[2] <= xarr[1] &&
    xarr[1] <= yarr[2]
  ) {
    return console.log(yarr[2] - xarr[1] + (yarr[0] - xarr[1]));
  } else if (
    xarr[0] <= xarr[2] &&
    xarr[2] <= yarr[0] &&
    xarr[1] <= xarr[2] &&
    xarr[2] <= yarr[1]
  ) {
    return console.log(yarr[0] - xarr[2] + (yarr[1] - xarr[2]));
  }
  // yarr
  else if (
    xarr[1] <= yarr[0] &&
    yarr[0] <= yarr[1] &&
    xarr[2] <= yarr[0] &&
    yarr[0] <= yarr[2]
  ) {
    return console.log(yarr[1] - yarr[0] + (yarr[2] - yarr[0]));
  } else if (
    xarr[0] <= yarr[1] &&
    yarr[1] <= yarr[0] &&
    xarr[2] <= yarr[1] &&
    yarr[1] <= yarr[2]
  ) {
    return console.log(yarr[2] - yarr[1] + (yarr[0] - yarr[1]));
  } else if (
    xarr[0] <= yarr[2] &&
    yarr[2] <= yarr[0] &&
    xarr[1] <= yarr[2] &&
    yarr[2] <= yarr[1]
  ) {
    return console.log(yarr[0] - yarr[2] + (yarr[1] - yarr[2]));
  }
  // +
  else if (
    xarr[1] <= xarr[0] &&
    xarr[0] <= yarr[1] &&
    xarr[2] <= yarr[0] &&
    yarr[0] <= yarr[2]
  ) {
    return console.log(yarr[1] - xarr[0] + (yarr[2] - yarr[0]));
  } else if (
    xarr[0] <= xarr[1] &&
    xarr[1] <= yarr[0] &&
    xarr[2] <= yarr[1] &&
    yarr[1] <= yarr[2]
  ) {
    return console.log(yarr[2] - xarr[1] + (yarr[0] - yarr[1]));
  } else if (
    xarr[0] <= xarr[2] &&
    xarr[2] <= yarr[0] &&
    xarr[1] <= yarr[2] &&
    yarr[2] <= yarr[1]
  ) {
    return console.log(yarr[0] - xarr[2] + (yarr[1] - yarr[2]));
  }
  // +
  else if (
    xarr[1] <= yarr[0] &&
    yarr[0] <= yarr[1] &&
    xarr[2] <= xarr[0] &&
    xarr[0] <= yarr[2]
  ) {
    return console.log(yarr[1] - yarr[0] + (yarr[2] - xarr[0]));
  } else if (
    xarr[0] <= yarr[1] &&
    yarr[1] <= yarr[0] &&
    xarr[2] <= xarr[1] &&
    xarr[1] <= yarr[2]
  ) {
    return console.log(yarr[2] - yarr[1] + (yarr[0] - xarr[1]));
  } else if (
    xarr[0] <= yarr[2] &&
    yarr[2] <= yarr[0] &&
    xarr[1] <= xarr[2] &&
    xarr[2] <= yarr[1]
  ) {
    return console.log(yarr[0] - yarr[2] + (yarr[1] - xarr[2]));
  } else {
    return console.log(0);
  }
}

Solution([
  [-1, 1],
  [1, 3],
  [3, 9],
]);
