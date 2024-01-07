/*
[영어가 싫어요]
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
문자열 numbers가 매개변수로 주어질 때, 
numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
*/

// 생각나는 방식이 세 종류여서 모두 구현 후 시간 복잡도를 측정해보았음

// 1. 객체 + for문: 1.91ms - 2.96ms
const numbersObj = {
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

const solution = (numStr) => {
  let cul = "";
  let answer = "";

  for (let i = 0; i < numStr.length; i++) {
    cul += numStr[i];
    if (numbersObj[cul] >= 0) {
      answer += numbersObj[cul];
      cul = "";
    }
  }

  return Number(answer);
};

// console.log(solution("onetwothreefourfivesixseveneightnine"));
// console.log(solution("onefourzerosixseven"));

// 2. 객체 + reduce: 0.08ms - 0.20ms (가장 빠른 조합)
// 찾아본 결과 reduce의 두 번째 인자로 초기값을 줄 수 있었음
const solution2 = (numStr) => {
  const answer = [...numStr].reduce(
    (arr, cur) => {
      const cul = arr.acc + cur;
      if (numbersObj[cul] >= 0) {
        return { acc: "", result: arr.result + numbersObj[cul] };
      }
      return { acc: cul, result: arr.result };
    },
    {
      acc: "",
      result: "",
    }
  );

  return Number(answer.result);
};

console.log(solution2("onetwothreefourfivesixseveneightnine"));
console.log(solution2("onefourzerosixseven"));

// reduce + 객체

// 3. reduce + 배열: 0.10ms - 0.26ms
const numbersArr = [
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

const solution3 = (numStr) => {
  const answer = numStr.split("").reduce(
    (arr, cur) => {
      const cul = arr.acc + cur;
      const idx = numbersArr.indexOf(cul);
      if (idx >= 0) {
        return { acc: "", result: arr.result + idx };
      }
      return { acc: cul, result: arr.result };
    },
    {
      acc: "",
      result: "",
    }
  );

  return Number(answer.result);
};

console.log(solution3("onetwothreefourfivesixseveneightnine"));
console.log(solution3("onefourzerosixseven"));

// ➡️ 코드 자체의 가독성은 객체 + for문이 제일 좋고,
// 시간 복잡도까지 고려했을 때는 객체 + reduce가 제일 빨랐다.
// 배열 + reduce도 for문을 사용할 때보다 훨씬 빨랐으므로 앞으로는 reduce를 사용해보려 노력해야겠다.
// (가끔 시간이 오래 걸리면 런타임 에러가 나는 경우가 있기 때문!)
