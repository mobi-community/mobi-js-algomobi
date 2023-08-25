/*
영어가 싫어요
문제 설명
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

제한사항
numbers는 소문자로만 구성되어 있습니다.
numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
1 ≤ numbers의 길이 ≤ 50
"zero"는 numbers의 맨 앞에 올 수 없습니다.

입출력 예
numbers	result
"onetwothreefourfivesixseveneightnine"	123456789
"onefourzerosixseven"	14067
*/

/*
설계하기
key, value로 객체 만들기
let num = { "zero": 0, "one": 1, ...} 로 변환하기
number에 num key값이 있으면 숫자로 반환
*/

function solution(numbers) {
  let num = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let result = ""; // 결과 반환할 문자열 변수
  let currWord = ""; // 단어 넣을 문자열 변수

  for (let i = 0; i < numbers.length; i++) {
    currWord += numbers[i]; // numbers 문자열을 차례로 새 변수에 넣어주며
    if (currWord in num) {
      // num 객체의 key값이 들어있을 때마다 result에 value를 넣어줌
      result += num[currWord];
      currWord = "";
    }
  }
  return Number(result);
}

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
