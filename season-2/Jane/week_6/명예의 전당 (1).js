/*
@ 풀이 방법 생각하기
0. 결과값 반환을 위한 answer 배열을 생성한다.
1. 명예의 전당을 나타내는 HOF 배열을 생성한다.
  - 프로그램 시작 이후 초기 k일까지는 모든 점수가 반영되게 되므로 HOF 배열의 초기값은 score.slice(0, 3)을 sort한 값이다.
  - k만큼 반복하는 for문을 돌려 해당 기간 동안은 Math.min한 값이 answer에 담긴다.
2. 배열의 마지막 값과 score을 Math.max 결과값이 배열의 마지막에 담기고 answer 배열에 push 된다.
*/

const MinBeforeK = (arr) => {
  const min = [];
  for (let i = 0; i < arr.length; i++) {
    min.push(Math.min(...arr.slice(0, i + 1)));
  }
  return min;
};

function solution(k, score) {
  const initialArr = score.slice(0, k);
  const answer = [...MinBeforeK(initialArr)];
  let HOF = initialArr.sort((a, b) => b - a);
  for (let i = k; i < score.length; i++) {
    const last = HOF.length - 1;
    // 새로 들어온 값이 더 크면
    if (score[i] > HOF[last]) {
      HOF.pop();
      HOF.push(score[i]);
      HOF = HOF.sort((a, b) => b - a);
      answer.push(Math.min(...HOF));
    } else {
      // 새로 들어온 값이 더 작으면
      answer.push(HOF[last]);
    }
  }
  return answer;
}
