/*
[평행]
점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 
두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 
solution 함수를 완성해보세요.
*/

function solution(dots) {
  // 각 선분들의 기울기 구하기

  const getSlope = (el1, el2) => {
    return (el2[1] - el1[1]) / (el2[0] - el1[0]);
  };

  // 01/23
  if (getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])) return 1;

  // 02/13
  if (getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])) return 1;

  // 03/12
  if (getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])) return 1;

  return 0;
}

// @ notes
/*
풀이 전 기록
[두 점을 지나는 직선의 기울기]
기울기 = (y2 - y1)/(x2 - x1)

[입출력 예시에 적용하기]
- 점 (1, 4)(3, 8) = 4 / 2 = 2
- 점 (9, 2)(11, 6) = 4 / 2 = 2

[어떻게 풀 수 있을까?]
- 반복문 사용하기
- 리그 방식으로 모든 요소들 간의 거리 구하기 > 테스트 케이스 에러의 원인!
- 겹치는 값이 있는지 확인하기
*/

// 실패한 코드 기록
// 테스트 케이스 12번 ~ 통과하지 못함!
// 이유: 아래의 코드는 모든 경우의 수에 대한 계산을 하고 있지만 (a-b, a-c, a-d, b-c, b-d, c-d)
// 문제에서 원한 것은 [a-b, c-d],[a-c, b-d],[a-d, b-c], 즉 네 개로 임의의 두 쌍을 만들었을 때만 포함하는 것이었기 때문!
function wrong_solution(dots) {
  // 각 선분들의 기울기 구하기

  const slopeArr = [];

  const getSlope = (el1, el2) => {
    return (el2[1] - el1[1]) / (el2[0] - el1[0]);
  };

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      slopeArr.push(getSlope(dots[j], dots[i]));
    }
  }

  // 겹치는 기울기가 있는지 확인하기
  const slopeSet = new Set(slopeArr);

  return slopeArr.length === slopeSet.size ? 0 : 1;
}
