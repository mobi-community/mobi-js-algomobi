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
