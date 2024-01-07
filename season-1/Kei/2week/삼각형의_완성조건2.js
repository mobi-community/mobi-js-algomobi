/*
삼각형의 완성조건 (2)
문제 설명
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

입출력 예
sides	result
[1, 2]	1
[3, 6]	5
[11, 7]	13
*/

/*
1. a + b > c, 가장 긴 변의 길이는 다른 두 변의 길이 합보다 작아야 한다

문제가 잘 이해가지 않아서 다른 사람의 풀이로 이해중!
*/

// 다른 사람의 풀이 1
function solution(sides) {
  let answer = 0;
  const min = Math.min(...sides);
  const max = Math.max(...sides);

  for (let i = max - min + 1; i <= max; i++) {
    answer += 1;
  }
  for (let i = max + 1; i < max + min; i++) {
    answer += 1;
  }
  return answer;
}

// 다른 사람의 풀이 2
function solution(sides) {
  // 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.

  // 주어진 두 변이 최대 길이의 변이 아닌 경우
  // 가장 긴 변(x)의 길이가 다른 두 변의 길이의 합보다 작은 경우

  // 주어진 두 변 중에 최대 길의 변이 있는 경우
  // 주어진 두 변 중 긴 변의 길이가 나머지 한 변의 길이와 나머지 한 변의 길이보다 작은 경우

  // x < side1 + side2
  // max(side) < x + min(side)
  // max(side) - min(side) < x < side1 + side2

  let maxNum = Math.max(...sides);
  let minNum = Math.min(...sides);
  let sum = sides.reduce((a, c) => a + c, 0);
  return sum - (maxNum - minNum) - 1; // 시작지점으로 개수를 새기 때문에 -1를 해준다
}

console.log(solution([1, 2])); // 1
console.log(solution([3, 6])); // 5
console.log(solution([11, 7])); // 13
