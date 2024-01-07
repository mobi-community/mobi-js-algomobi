/*
[주사위 게임2]
1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 
세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 
(a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

1. 세 숫자가 모두 다르다면 a + b + c
2. 세 숫자 중 하나만 다르다면 (a + a + b)(a2 + a2 + b2) = (2a+b)(2a2+b2) = 4a3 + 2a2b + 2ab2 + b3

- 2a(2a2 + ab + b) + b2
- 2a(a(2a + b) + b) + b2
- 2a2(2a+b) + 2ab + b2

3. 세 숫자가 모두 같다면 (a + a + a)(a2 + a2 + a2)(a3+a3+a3) = 3a * 3a2 * 3a3 = 27a6
*/

const sameNum = (a, b, c) => {
  const SET = new Set([a, b, c]);
  return SET.size;
};

const solution = (a, b, c) => {
  const result = sameNum(a, b, c);
  const pow = (num) => a ** num + b ** num + c ** num;

  if (result === 3) return pow(1);
  if (result === 2) return pow(1) * pow(2);

  return pow(1) * pow(2) * pow(3);
};

// console.log(solution(2, 6, 1));
// console.log(solution(5, 3, 3));
// console.log(solution(4, 4, 4));
