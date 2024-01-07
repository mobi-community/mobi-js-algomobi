/*
문자열 계산하기

문제 설명
my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

입출력 예
my_string	result
"3 + 4"	7

["3", "+", "4"]
1번 인덱스를 두 가지 케이스로 나눔 if + ? if - ?
i번 인덱스가 홀수인 경우는 부호
reduce acc + cur 로 누적하고 다름 부호값을 찾고 연산하는 과정 필요
값을 누적하고 + or -
*/

function solution(my_string) {
  const strArr = my_string.split(" "); // 공백으로 split하여 배열 생성
  const sign = strArr.filter((_, i) => i % 2 === 1); // 부호
  const numbers = strArr.filter((_, i) => i % 2 === 0); // 숫자

  // 첫번째 숫자를 초기값으로 설정하여 1번 인덱스부터 누적값 계산
  const result = numbers.slice(1).reduce((acc, cur, i) => {
    const operator = sign[i];
    const num = parseInt(cur);

    switch (operator) {
      case "+":
        return acc + num;
      case "-":
        return acc - num;
    }
  }, parseInt(numbers[0]));
  return result;
}

console.log(solution("3 + 4 - 2")); // 5
console.log(solution("3 - 4")); // -1
