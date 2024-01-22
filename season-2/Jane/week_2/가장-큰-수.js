/*
@ 풀이 방법 고민해보기
1. 배열의 각 수를 문자열로 만든 뒤 split한다.
2. 각 수 배열의 0번째 값이 큰 순서대로 정렬한다.
3. 0번째 값이 같다면 합쳤을 때 결과가 더 큰 순서대로 정렬한다.
4. 순서대로 합친 결과값을 반환한다.
*/

function solution(numbers) {
  const arr = numbers.map((number) => (number + "").split(""));
  arr.sort((a, b) => {
    // 이렇게 분기처리할 필요 없이 그냥 합친 결과 순서대로만 정렬하면 됐을 것 같다.
    if (a[0] === b[0]) {
      return b.join("") + a.join("") - (a.join("") + b.join(""));
    }
    return b[0] - a[0];
  });

  const result = arr.map((arr) => arr.join("")).join("");
  // 여기서도 Number 처리할 필요 없이 배열 맨 앞이 0이면 다 0일 것이므로 인덱싱 후 삼항 연산자를 사용하는 것이 더 좋았을 듯!
  if (Number(result) === 0) return "0";
  return result;
}

// 훨씬 간단한 풀이 방법
// 이 코드를 보니 내 풀이는 불필요한 코드와 계산이 너무 많다는 생각이 들었다.
function solution(numbers) {
  var answer = numbers
    .map((v) => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
