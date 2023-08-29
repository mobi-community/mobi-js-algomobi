/* 문제 설명
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요. */

/* 제한사항
- sides의 원소는 자연수입니다.
- sides의 길이는 2입니다.
- 1 ≤ sides의 원소 ≤ 1,000 */

function solution(sides) {
  const maxNum = Math.max(...sides);
  const minNum = Math.min(...sides);
  let count = 0;

  for (let i = maxNum - minNum + 1; i <= maxNum; i++) count++;
  for (let i = maxNum + 1; i < maxNum + minNum; i++) count++;
  return count;
}

/*
return Math.min(...sides) * 2 - 1
sides = [a,b] 이고(a>b라고 가정, 이는 sort해주면됩니다.) 
새로 주어지는 변의 길이를 c라고 했을 때, 
a가 가장 긴변인 경우 즉 a > c인 경우 b + c > a > c 이므로 a > c > a-b 이기 때문에 c의 정수 갯수는 b-1개입니다. 
/ c가 가장 긴변인 경우도 이런식으로 하면 되고 a=c 인경우 한가지 이므로 2b-1이 나옵니다.
*/
