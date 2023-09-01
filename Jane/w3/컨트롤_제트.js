/*
[컨트롤 제트]
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 
문자열에 있는 숫자를 차례대로 더하려고 합니다. 
이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 
숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 
머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
*/

// @ notes
/*
[어떻게 풀 수 있을까?]
for문 사용해서 다음 인덱스에 Z가 있으면 삭제하기
*/

const solution = (s) => {
  const toNum = s.split(" ").map((el) => Number(el));

  const result = toNum.filter(
    (num, i, arr) =>
      (i === arr.length - 1 && !isNaN(num)) ||
      (!isNaN(arr[i + 1]) && !isNaN(num))
  );

  return result.length ? result.reduce((sum, num) => sum + num) : 0;
};

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("10 Z 20 Z"));
console.log(solution("-1 -2 -3 Z"));
