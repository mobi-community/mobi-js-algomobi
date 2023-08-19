/* 문제 설명
점 네 개의 좌표를 담은 이차원 배열 dots가 다음과 같이 매개변수로 주어집니다.

[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]

주어진 네 개의 점을 두 개씩 이었을 때, 
두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요. */

/*제한사항
dots의 길이 = 4
dots의 원소는 [x, y] 형태이며 x, y는 정수입니다.
	0 ≤ x, y ≤ 100
서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다. */

function solution(dots) {
  let answer = 0;

  function getSlope(a, b, c, d) {
    let a_b = (b[1] - a[1]) / (b[0] - a[0]);
    let c_d = (d[1] - c[1]) / (d[0] - c[0]);

    if (a_b === c_d) {
      answer += 1;
    }
  }

  getSlope(dots[0], dots[1], dots[2], dots[3]);
  getSlope(dots[0], dots[2], dots[1], dots[3]);
  getSlope(dots[0], dots[3], dots[1], dots[2]);

  return console.log(answer > 0 ? 1 : 0);
}

solution([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]);

/* 참조
https://velog.io/@me-hana/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.0-Javascript-%ED%8F%89%ED%96%89
이 링크의 답을 참고했다.

내가 못 푼 이유?
시간 초과.
주어지는 배열의 두개의 조합을 각각 비교(자기자신 포함)하려고 했던 접근방법이 틀렸다.
*/
