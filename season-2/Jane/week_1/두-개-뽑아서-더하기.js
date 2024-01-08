// 프로그래머스 level-1 두 개 뽑아서 더하기 / 풀이 소요 시간 3분 (정답룔 69%)

/*
@ 풀이 방법 생각하기

1. 이중 for문을 사용하여 배열의 각 요소를 더한다.
2. 결과를 나타내는 set를 생성하여 더한 값을 담는다.
3. set를 배열에 전개하여 정렬한 뒤 반환한다.
*/

function solution(numbers) {
  const result = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i === j) continue;
      result.add(numbers[i] + numbers[j]);
    }
  }

  return [...result].sort((a, b) => a - b);
}
