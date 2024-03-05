/*
@ 풀이 방법 생각하기
1. (for문을 두 개 돌릴 경우 시간이 너무 오래 걸리는 문제 발생)
> idx를 하나의 변수로 두고 지금까지의 문자열을 다른 하나의 변수로 둔다.
2. 인덱스가 msg를 다 순회할 때까지 반복문을 돌린다.
3. 반복이 새로 시작할 때마다 지금까지의 문자열에 다음 글자 하나를 붙인다.
4. 만약 해당 값이 dictionary 안에 있다면 넘어간다.
5. 만약 해당 값이 dictionary 안에 없다면 그 전까지의 값의 색인 번호를 answer 배열에 넣고 해당 값을 사전에 추가한다.
6. 배열의 마지막에 인덱스가 도착했을 경우 처리되지 않은 글자가 있다면 해당 값의 색인 번호를 추가하도록 처리한다.
*/

const dictionary = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function solution(msg) {
  const answer = [];
  let targetIdx = 0;
  let targetStr = "";
  while (msg.length !== targetIdx) {
    targetStr = targetStr + msg[targetIdx];
    if (dictionary.includes(targetStr)) {
      // 만약 사전에 값이 있다면 그냥 넘어간다.
      targetIdx++;
    } else {
      // 만약 사전에 값이 없다면
      const previousStr = targetStr.slice(0, targetStr.length - 1);
      answer.push(dictionary.findIndex((words) => words === previousStr) + 1);
      dictionary.push(targetStr);
      targetStr = "";
    }

    if (targetIdx === msg.length) {
      answer.push(dictionary.findIndex((words) => words === targetStr) + 1);
    }
  }
  return answer;
}
