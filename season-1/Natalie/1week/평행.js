// 평행
// https://school.programmers.co.kr/learn/courses/30/lessons/120875

// 1. 사고하기
// 두직선이 평행인지를 확인하는 방법 : 두 직선의 기울기가 같아야함.
// 기울기를 구하는 방법 : 두점의 y좌표 차이를 x좌표 차이로 나누어 구하기!

// 2. Set()
// 중복된 값 삭제 + 순서유지

function solution(dots) {
  const slopes = new Set(); // 기울기값

  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      const [x1, y1] = dots[i];
      const [x2, y2] = dots[j];

      const slope = (y2 - y1) / (x2 - x1); // 두점 그은 직선기울기

      slopes.add(slope);
    }
  }

  return slopes.size === 1 ? 1 : 0; // set -> 1이면 기울기같음 = 1반환 OR 0 반환
}

const dots = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
];

// --> 실패.. 원인 모르겠음 ㅠㅠ
// set에서 중복으로 인식하는거에 뭔가 문제가있었나...

//
// 2번째 풀이 -- set 사용하지않고

function solution(dots) {
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      const [x1, y1] = dots[i];
      const [x2, y2] = dots[j];

      const slope = (y2 - y1) / (x2 - x1);
      if (slope === Infinity || slope === -Infinity) {
        // 기울기 무한대 = x좌표가 같은 경우 = 직선평행
        // infinity -> 양수의 무한대 (-는 반대)
        return 1;
      }

      if (!isNaN(slope)) {
        // isNaN 숫자구별위해서 사용(기울기무한대 경우)
        for (let k = j + 1; k < 4; k++) {
          const [x3, y3] = dots[k];
          const [x4, y4] = dots[6 - (i + j + k)]; // 남은 점 찾기

          const otherSlope = (y4 - y3) / (x4 - x3);

          if (slope === otherSlope) {
            return 1; // 두 직선이 평행
          }
        }
      }
    }
  }

  return 0;
}
