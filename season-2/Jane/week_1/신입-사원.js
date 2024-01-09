/*
@ 풀이 방법 생각하기

1. 입력값을 정제한다.
2. 서류 심사 성적을 기준으로 참가자를 정렬한다.
3. for문을 사용하여 서류 심사 성적 기준 후순위 참가자들과 면접 성적을 비교한다.
4. count 변수에 서류 순위는 낮아도 면접 순위는 높은 경우가 있다면 1을 더한다.
5. 출력값을 정제한다.
*/

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

const makeCases = (list) => {
  let cases = [];
  while (list.length > 0) {
    const [_, ...applicants] = list.splice(0, Number(list[0]) + 1);
    cases.push(applicants.map((applicant) => applicant.split(" ").map(Number)));
  }
  return cases;
};

const cases = makeCases(input);

const answer = [];

for (i = 0; i < cases.length; i++) {
  cases[i].sort(([d1], [d2]) => d1 - d2);

  let cnt = 1;
  let target = cases[i][0][1];
  // 만약 본인보다 서류 점수는 높지만 면접 점수는 낮은 참가자가 있다면 true로 전환
  for (let j = 1; j < cases[i].length; j++) {
    if (target > cases[i][j][1]) {
      cnt++;
      target = cases[i][j][1];
    }
  }
  answer.push(cnt);
}

console.log(answer.join("\n"));

/*
@ 풀이하고 나서,,

처음에는 flag변수를 사용하여 배열의 요소를 boolean 타입으로 바꾼 뒤
filter와 map을 사용하는 로직을 생각했었는데 불필요한 연산이 많이 추가된다는 생각이 들어
바로 count 변수를 사용할 수 있는 방법으로 수정하였다.

문제 풀이 시간이 조금 더 들더라도 효율적인 방법을 생각해보려고 노력해야겠당
*/
