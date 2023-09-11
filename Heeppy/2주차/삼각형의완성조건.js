// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

// 조건 1. 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
// 조건 2. 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어진다.
// 나머지 한 변이 될 수 있는 정수의 개수를 return 하도록 solution 함수 완성

function solution(sides) {
  let count = 0;
  // return 값이 가장 크다고 가정
  for (let i = 0; i < sides[0] + sides[1]; i++) {
    count++;
    console.log("i", count);
  }
  for (
    let j = 0;
    j < Math.max.apply(null, sides) - Math.min.apply(null, sides);
    j++
  ) {
    count++;
    console.log("j", count);
  }
  //   return console.log(count);
}

solution([1, 2]);
