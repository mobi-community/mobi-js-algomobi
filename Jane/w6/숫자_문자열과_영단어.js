/*
[숫자 문자열과 영단어]

네오와 프로도가 숫자놀이를 하고 있습니다. 
네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 
혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. 
s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.
*/

// @ notes
/*
[어떻게 풀 수 있을까?]
- Number가 NaN이 아닌 경우 그냥 숫자 담기
- Number가 NaN인 경우 value가 존재하는 key가 될 때까지 변수에 담기
*/

const NUM_OBJ = {
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

const solution = (s) => {
  let key = "";
  const result = [];
  const isNum = (val) => Number.isInteger(Number(val));

  for (let i = 0; i < s.length; i++) {
    if (isNum(s[i])) {
      result.push(s[i]);
    } else {
      key += s[i];
      if (isNum(NUM_OBJ[key])) {
        result.push(NUM_OBJ[key]);
        key = "";
      }
    }
  }

  return Number(result.join(""));
};

// 간단한 풀이! 👀 생각도 못한 방식이라 신기했음
function simple_sol(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    // 배열을 인덱스를 통해 찾은 값으로 split
    let arr = answer.split(numbers[i]);
    // split할 때 사용한 인덱스 값으로 붙이기
    answer = arr.join(i);
  }

  return Number(answer);
}

// console.log(solution("one4seveneight"));
// console.log(solution("23four5six7"));
// console.log(solution("2three45sixseven"));
// console.log(solution("123"));
// console.log(solution("100"));
// console.log(solution("1000"));
console.log(solution("one0zero0"));
