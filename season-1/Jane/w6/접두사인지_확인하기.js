/*
[접두사인지 확인하기]
어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 
예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
문자열 my_string과 is_prefix가 주어질 때, 
is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
*/

// @notes
/*
[어떻게 풀 수 있을까?]
1. for문으로 앞에서부터 하나씩 자른 문자열 모두 담아 검사하기
2. 0부터 prefix만큼 자른 것이 prefix와 일치하는지 확인하기
*/

// 1번 풀이 (3.36ms - 6.74ms) ➡️ 쓸데없이 복잡하기만 했던 걸로,,^^
function solution_1(my_string, is_prefix) {
  const strArray = [...my_string];
  const arr = [];
  for (let i = 1; i <= strArray.length; i++) {
    arr.push(strArray.slice(0, i).join(""));
  }
  console.log(arr);
  return arr.some((el) => el === is_prefix) ? 1 : 0;
}

// 2번 풀이 (0.03 ms)
const solution = (str, prefix) =>
  str.slice(0, prefix.length) === prefix ? 1 : 0;

console.log(solution("banana", "ban"));
console.log(solution("banana", "nan"));
console.log(solution("banana", "abcd"));
console.log(solution("banana", "bananan"));
