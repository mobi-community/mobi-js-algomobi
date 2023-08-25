/*
[삼각형의 완성조건 (2)]
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.
*/

const solution = (sides) => {
  const Max = Math.max(...sides);
  const Min = Math.min(...sides);
  let result = [];

  // 가장 긴 변이 배열 안에 있는 경우
  for (let i = 1; i <= Max; i++) {
    if (Min + i > Max) result.push(i);
  }

  // 구해야 되는 값이 가장 긴 변인 경우
  for (let i = Max; i < Min + Max; i++) {
    if (i < Min + Max) result.push(i);
  }

  result = new Set(result);

  return result.size;
};

console.log(solution([1, 2])); // 1
console.log(solution([3, 6])); // 5
console.log(solution([11, 7])); // 13

// @ notes
/*
  [어떻게 풀 수 있을까?]
  1. 가장 긴 변이 배열 안에 있는 경우
      - Max 값이 Min 값과 구해야 하는 값의 합보다 작아야 함
      - 이때 구해야 하는 값은 Max 값보다 작아야 함
  2. 구해야 되는 값이 가장 긴 변인 경우
      - Max + Min 값보다 구해야 하는 값이 작아야 함
      - 이때 구해야 하는 값은 Max 값보다 커야 함
  */

/*
  [간단한 풀이 방법]
  function solution(sides) {
      return Math.min(...sides)*2-1
  }
  
  [a, b] 라고 가정했을 때,  (a < b)
  1. 이미 아는 변 중 하나가 가장 긴 경우: b < a + c ➡️ b - a < c
  2. 모르는 변이 가장 긴 경우: c < a + b
  
  따라서 
  b - a < c < a + b
  ➡️ c = (a + b) - (b - a) - 1 = 2a -1
  
  혼자서는 절대 생각 못했을듯,,^^
  */
