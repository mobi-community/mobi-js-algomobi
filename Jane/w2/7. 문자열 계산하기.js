/*
[문자열 계산하기]
my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 
문자열 my_string이 매개변수로 주어질 때, 
수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
*/

const solution = (my_string) => {
  const s = my_string.split(" ");
  const makeNum = (index) => Number(s[index]);

  let result = makeNum(0);

  for (let i = 1; i < s.length; i += 2) {
    if (s[i] === "+") {
      result += Number(s[i + 1]);
    } else {
      result -= Number(s[i + 1]);
    }
  }

  return result;
};

console.log(solution("3 + 4 - 2"));

// @ notes: 처음에 연산자가 하나인 경우만 생각해서 틀렸음
// 1 + 2 - 1 + 5
/*
0. 1이 숫자
1. +는 연산자, +
2. 2가 숫자
3. -는 연산자, -
4. 1은 숫자
5. +는 연산자, +
6. 5는 숫자

홀수 인덱스는 연산자
짝수 인덱스는 숫자
*/

// eval이라는 함수를 쓰면 바로 계산 가능하지만 권장되지 않는 코드여서 다른 방식을 사용하였음
