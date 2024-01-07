// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  const width = Math.abs(dots[0][0] - dots[1][0]);
  const height = Math.abs(dots[0][1] - dots[3][1]);

  const area = width * height;

  return area;
}

// 잘 안됨...??

// function solution(dots) {
//   const [x1, y1] = dots[0];
//   const [x2, y2] = dots[1];
//   const [x3, y3] = dots[2];
//   const [x4, y4] = dots[3];

//   const determinant = Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2);

//   const answer = determinant / 2;

//   return answer;
// }
