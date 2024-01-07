/*
[저주의 숫자 3]
3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 
3x 마을 사람들의 숫자는 다음과 같습니다.

|10진법|변환 후|10진법|변환 후|
|1|1|6|8|
|2|2|7|10|
|3|4|8|11|
|4|5|9|14|
|5|7|10|16|

> 전체 숫자에서 3의 배수가 없다고 생각하면 됨

정수 n이 매개변수로 주어질 때, 
n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

1 1
2 2
3 4
4 5
5 7
6 8 
7 10
8 11
9 14
10 16
11 17
12 19
13 20
14 22
15 25
*/

const hasThree = (num) => {
  const toStr = num + "";
  const result = [...toStr].filter((el) => el === "3").length;
  return !!result;
};

const solution = (n) => {
  let cnt = 0;
  let num = 0;
  while (cnt < n) {
    while (hasThree(num)) num += hasThree(num);
    if ((num + 1) % 3 === 0) {
      num += 2;
    } else {
      num += 1;
    }
    while (hasThree(num)) num += hasThree(num);
    if (num % 3 === 0) {
      num += 1;
    }
    cnt += 1;
    // console.log("res", cnt, num);
  }
  return num;
};

// console.log(solution(15));
console.log(solution(40));

/*
const hasThree = (num) => {
  const toStr = num + 1 + "";
  return [...toStr].includes("3");
};

// 3의 배수가 아니지만 3을 포함하는 숫자를 제외하지 못함
const solution = (n) => {
  let cnt = 0;
  let num = 0;
  while (cnt <= n) {
    if ((num + 1) % 3 === 0) {
      num += 2;
      if (hasThree(num)) num += 1;
    } else {
      num += 1;
    }

    cnt += 1;
  }
  return num;
};
*/

// 이번에는 더 간단하게 푸는 방법들이 있었는데 생각해내지 못한 것 같다.
// 다른 풀이 1
/*
function solution(n) {
  // 길이가 n*3인 배열 생성
  return [...Array(n * 3)]
  // 1부터 시작할 수 있도록 map 사용
    .map((_, i) => i + 1)
    // filter: 3을 포함하지 않고 3의 배수가 아닌 수만 남도록 필터링
    // [n-1]: 필터링된 배열에서 n번째로 작은 숫자 선택 (인덱스는 0부터 시작하므로 n-1 사용)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}
➡️ 이를 통해 주어진 조건을 만족하는 숫자들만 포함된 배열에서 n번째 숫자를 도출
*/

// 다른 풀이 2
/*
function solution(n) {
    let arr = [];
    let num = 0;
    // arr의 길이가 n과 같지 않을 때까지 반복
    // 💡 num 변수를 1씩 증가시키며 다음 수 검사
    while (arr.length !== n && ++num){
      // 3의 배수가 아니고 3을 포함하지 않는 경우만 arr에 담기
      if (num%3!==0 && !(''+num).includes('3')) arr.push(num);}
    // arr에는 조건에 만족하는 숫자들만 들어있음
    ➡️ arr.pop()으로 조건에 만족하는 가장 마지막 숫자를 꺼내 반환
    return arr.pop();
}
*/
